/*
 * Copyright 2021 Marek Kobida
 */

import * as babel from '@babel/core';
import allowedAttributes from './allowedAttributes';

interface S {
  decodeClassNameIdentifier: babel.types.Identifier;
  decodeResponsiveClassNameIdentifier: babel.types.Identifier;
}

export default function ({ types: t }: typeof babel): babel.PluginObj<S> {
  return {
    visitor: {
      JSXOpeningElement(path, state) {
        const attributes: (babel.types.JSXAttribute | babel.types.JSXSpreadAttribute)[] = [];
        const className: babel.types.Expression[] = [];

        path.node.attributes.forEach(attribute => {
          if (t.isJSXAttribute(attribute))
            if (t.isJSXIdentifier(attribute.name)) {
              const { name: attributeName } = attribute.name;

              if (attributeName === 'className') {
                if (t.isJSXExpressionContainer(attribute.value))
                  if (t.isExpression(attribute.value.expression)) return className.push(attribute.value.expression);

                if (t.isStringLiteral(attribute.value)) return className.push(attribute.value);
              }

              if (attributeName in allowedAttributes) {
                if (t.isJSXExpressionContainer(attribute.value))
                  if (t.isExpression(attribute.value.expression))
                    return className.push(
                      t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                        t.stringLiteral(allowedAttributes[attribute.name.name]),
                        attribute.value.expression,
                      ])
                    );

                if (t.isStringLiteral(attribute.value))
                  return className.push(
                    t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                      t.stringLiteral(allowedAttributes[attribute.name.name]),
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
                t.callExpression(state.decodeClassNameIdentifier, [t.arrayExpression(className)])
              )
            )
          );

        path.node.attributes = attributes;
      },
      Program: {
        enter(path, state) {
          state.decodeClassNameIdentifier = t.identifier('decodeClassName');
          state.decodeResponsiveClassNameIdentifier = t.identifier('decodeResponsiveClassName');
        },
        exit(path, state) {
          path.unshiftContainer('body', [
            t.importDeclaration(
              [t.importDefaultSpecifier(state.decodeClassNameIdentifier)],
              t.stringLiteral('@warden-sk/design/private/helpers/decodeClassName')
            ),
            t.importDeclaration(
              [t.importDefaultSpecifier(state.decodeResponsiveClassNameIdentifier)],
              t.stringLiteral('@warden-sk/design/private/helpers/decodeResponsiveClassName')
            ),
          ]);
        },
      },
    },
  };
}
