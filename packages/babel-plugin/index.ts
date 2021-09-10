/*
 * Copyright 2021 Marek Kobida
 */

import * as babel from '@babel/core';
import allowedJSXAttributes from './private/allowedJSXAttributes';
import json from './package.json';

export default function ({ types: t }: typeof babel): babel.PluginObj {
  return {
    visitor: {
      JSXOpeningElement(path) {
        const attributes: (babel.types.JSXAttribute | babel.types.JSXSpreadAttribute)[] = [];
        const className: babel.types.Expression[] = [];

        path.node.attributes.forEach(attribute => {
          if (t.isJSXAttribute(attribute))
            if (t.isJSXIdentifier(attribute.name)) {
              if (attribute.name.name === 'className') {
                if (t.isJSXExpressionContainer(attribute.value))
                  if (t.isExpression(attribute.value.expression)) return className.push(attribute.value.expression);

                if (t.isStringLiteral(attribute.value)) return className.push(attribute.value);
              }

              if (attribute.name.name in allowedJSXAttributes) {
                if (t.isJSXExpressionContainer(attribute.value))
                  if (t.isExpression(attribute.value.expression))
                    return className.push(
                      t.callExpression(t.identifier('decodeResponsiveClassName'), [
                        t.stringLiteral(allowedJSXAttributes[attribute.name.name as 'alignContent']),
                        attribute.value.expression,
                      ])
                    );

                if (t.isStringLiteral(attribute.value))
                  return className.push(
                    t.callExpression(t.identifier('decodeResponsiveClassName'), [
                      t.stringLiteral(allowedJSXAttributes[attribute.name.name as 'alignContent']),
                      attribute.value,
                    ])
                  );
              }
            }

          attributes.push(attribute);
        });

        if (className.length)
          attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('className'),
              t.jsxExpressionContainer(
                t.callExpression(t.identifier('decodeClassName'), [t.arrayExpression(className)])
              )
            )
          );

        path.node.attributes = attributes;
      },
      Program(path) {
        path.unshiftContainer('body', [
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier('decodeClassName'))],
            t.stringLiteral(`${json.name}/private/decodeClassName`)
          ),
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier('decodeResponsiveClassName'))],
            t.stringLiteral(`${json.name}/private/decodeResponsiveClassName`)
          ),
        ]);
      },
    },
  };
}
