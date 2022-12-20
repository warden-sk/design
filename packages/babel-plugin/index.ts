/*
 * Copyright 2023 Marek Kobida
 */

import type $ from '@babel/core';
import allowedJSXAttributes from './private/allowedJSXAttributes';
import css from '../design/private';
import fs from 'fs';

function pathFromRoot(relativePath: `/${string}`): string {
  return process.cwd() + relativePath;
}

export default ({ types }: { types: typeof $.types }): { visitor: $.Visitor } => {
  fs.writeFileSync(pathFromRoot('/private/design.css'), css());

  return {
    visitor: {
      JSXOpeningElement(path) {
        if (types.isJSXIdentifier(path.node.name)) {
          const attributes: ($.types.JSXAttribute | $.types.JSXSpreadAttribute)[] = [];
          const className: $.types.Expression[] = [];

          path.node.attributes.forEach(attribute => {
            if (types.isJSXAttribute(attribute)) {
              if (types.isJSXIdentifier(attribute.name)) {
                /* (1) */
                if (attribute.name.name === 'className') {
                  /* (1.1) */
                  if (types.isJSXExpressionContainer(attribute.value)) {
                    if (types.isExpression(attribute.value.expression)) {
                      return className.push(attribute.value.expression);
                    }
                  }
                  /* (1.2) */
                  if (types.isStringLiteral(attribute.value)) {
                    return className.push(attribute.value);
                  }
                }
                /* (2) */
                if (attribute.name.name in allowedJSXAttributes) {
                  /* (2.1) */
                  if (types.isJSXExpressionContainer(attribute.value)) {
                    if (types.isExpression(attribute.value.expression)) {
                      return className.push(
                        types.callExpression(types.identifier('decodeResponsiveClassName2'), [
                          types.stringLiteral(allowedJSXAttributes[attribute.name.name as 'alignContent']),
                          attribute.value.expression,
                        ])
                      );
                    }
                  }
                  /* (2.2) */
                  if (types.isStringLiteral(attribute.value)) {
                    return className.push(
                      types.callExpression(types.identifier('decodeResponsiveClassName2'), [
                        types.stringLiteral(allowedJSXAttributes[attribute.name.name as 'alignContent']),
                        attribute.value,
                      ])
                    );
                  }
                }
              }
            }

            attributes.push(attribute);
          });

          if (className.length) {
            attributes.push(
              types.jsxAttribute(
                types.jsxIdentifier('className'),
                types.jsxExpressionContainer(
                  types.callExpression(types.identifier('decodeClassName2'), [types.arrayExpression(className)])
                )
              )
            );
          }

          path.node.attributes = attributes;
        }
      },
      Program(path) {
        path.unshiftContainer('body', [
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('decodeClassName2'))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/decodeClassName'))
          ),
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('decodeResponsiveClassName2'))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/decodeResponsiveClassName'))
          ),
        ]);
      },
    },
  };
};
