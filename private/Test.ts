import * as babel from '@babel/core';
import commonParameters from './commonParameters.json';

const PATH = '@warden-sk/design/helpers';

function Test({ types: t }: typeof babel): babel.PluginObj {
  return {
    name: 'Test',
    visitor: {
      JSXOpeningElement(path, state) {
        const attributes = [];

        const className = [];

        path.node.attributes.forEach(attribute => {
          if (t.isJSXAttribute(attribute)) {
            if (t.isJSXIdentifier(attribute.name)) {
              if (attribute.name.name === 'className') {
                if (t.isStringLiteral(attribute.value)) {
                  className.push(attribute.value);
                  return;
                }

                if (t.isJSXExpressionContainer(attribute.value)) {
                  className.push(attribute.value.expression);
                  return;
                }
              }

              if (attribute.name.name in commonParameters) {
                if (t.isStringLiteral(attribute.value)) {
                  className.push(
                    t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                      t.stringLiteral(commonParameters[attribute.name.name]),
                      attribute.value,
                    ])
                  );
                  return;
                }

                if (t.isJSXExpressionContainer(attribute.value)) {
                  className.push(
                    t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                      t.stringLiteral(commonParameters[attribute.name.name]),
                      attribute.value.expression,
                    ])
                  );
                  return;
                }
              }
            }
          }

          attributes.push(attribute);
        });

        if (className.length) {
          attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('className'),
              t.jsxExpressionContainer(
                t.callExpression(state.decodeClassNameIdentifier, [t.arrayExpression(className)])
              )
            )
          );

          state.yes = true;
        }

        path.node.attributes = attributes;
      },
      Program: {
        enter(path, state) {
          state.decodeClassNameIdentifier = path.scope.generateUidIdentifier('decodeClassName');
          state.decodeResponsiveClassNameIdentifier = path.scope.generateUidIdentifier('decodeResponsiveClassName');
        },
        exit(path, state) {
          if (state.yes) {
            path.node.body.unshift(
              t.importDeclaration(
                [t.importDefaultSpecifier(state.decodeClassNameIdentifier)],
                t.stringLiteral(`${PATH}/decodeClassName`)
              ),
              t.importDeclaration(
                [t.importDefaultSpecifier(state.decodeResponsiveClassNameIdentifier)],
                t.stringLiteral(`${PATH}/decodeResponsiveClassName`)
              )
            );
          }
        },
      },
    },
  };
}

export default Test;
