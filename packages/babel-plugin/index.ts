/*
 * Copyright 2023 Marek Kobida
 */

import type $ from '@babel/core';
import allowedJSXAttributes from './private/allowedJSXAttributes';
import fs from 'fs';
import css from '@warden-sk/design/private';
import dictionary from './private/dictionary';
import allowedHTMLElements from './private/allowedHTMLElements';

function pathFromRoot(relativePath: `/${string}`): string {
  return process.cwd() + relativePath;
}

interface S {
  decodeClassName: string;
  decodeJSXSpreadAttributes: string;
  decodeResponsiveClassName: string;
  filterJSXSpreadAttributes: string;
}

export default ({ types }: { types: typeof $.types }): { visitor: $.Visitor<S> } => {
  return {
    visitor: {
      JSXOpeningElement(path, state) {
        if (types.isJSXIdentifier(path.node.name) && allowedHTMLElements.indexOf(path.node.name.name) !== -1) {
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
                        types.callExpression(types.identifier(state.decodeResponsiveClassName), [
                          types.stringLiteral(dictionary.getKey(attribute.name.name)),
                          attribute.value.expression,
                        ])
                      );
                    }
                  }
                  /* (2.2) */
                  if (types.isStringLiteral(attribute.value)) {
                    return className.push(
                      types.callExpression(types.identifier(state.decodeResponsiveClassName), [
                        types.stringLiteral(dictionary.getKey(attribute.name.name)),
                        attribute.value,
                      ])
                    );
                  }
                }
              }
            }

            if (types.isJSXSpreadAttribute(attribute)) {
              attributes.push(
                types.jsxSpreadAttribute(
                  types.callExpression(types.identifier(state.filterJSXSpreadAttributes), [attribute.argument])
                )
              );

              return className.push(
                types.callExpression(types.identifier(state.decodeJSXSpreadAttributes), [attribute.argument])
              );
            }

            attributes.push(attribute);
          });

          if (className.length) {
            attributes.push(
              types.jsxAttribute(
                types.jsxIdentifier('className'),
                types.jsxExpressionContainer(
                  types.callExpression(types.identifier(state.decodeClassName), [types.arrayExpression(className)])
                )
              )
            );
          }

          path.node.attributes = attributes;
        }
      },
      Program(path, state) {
        fs.writeFileSync(pathFromRoot('/private/design.css'), css());

        state.decodeClassName = path.scope.generateUid('decodeClassName');
        state.decodeJSXSpreadAttributes = path.scope.generateUid('decodeJSXSpreadAttributes');
        state.decodeResponsiveClassName = path.scope.generateUid('decodeResponsiveClassName');
        state.filterJSXSpreadAttributes = path.scope.generateUid('filterJSXSpreadAttributes');

        path.unshiftContainer('body', [
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier(state.decodeJSXSpreadAttributes))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/decodeJSXSpreadAttributes'))
          ),
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier(state.filterJSXSpreadAttributes))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/filterJSXSpreadAttributes'))
          ),
          //------------------------------------------------------------------------------------------------------------
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier(state.decodeClassName))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/decodeClassName'))
          ),
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier(state.decodeResponsiveClassName))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/decodeResponsiveClassName'))
          ),
        ]);
      },
    },
  };
};
