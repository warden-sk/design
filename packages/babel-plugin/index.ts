/*
 * Copyright 2023 Marek Kobida
 */

import type $ from '@babel/core';
import allowedJSXAttributes from './private/allowedJSXAttributes';
import fs from 'fs';
import css from '@warden-sk/design/private';

function pathFromRoot(relativePath: `/${string}`): string {
  return process.cwd() + relativePath;
}

const elements = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
];

export default ({ types }: { types: typeof $.types }): { visitor: $.Visitor } => {
  return {
    visitor: {
      JSXOpeningElement(path) {
        if (types.isJSXIdentifier(path.node.name) && elements.indexOf(path.node.name.name) !== -1) {
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
                          types.stringLiteral(allowedJSXAttributes[attribute.name.name]),
                          attribute.value.expression,
                        ])
                      );
                    }
                  }
                  /* (2.2) */
                  if (types.isStringLiteral(attribute.value)) {
                    return className.push(
                      types.callExpression(types.identifier('decodeResponsiveClassName2'), [
                        types.stringLiteral(allowedJSXAttributes[attribute.name.name]),
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
                  types.callExpression(types.identifier('deleteFromJSXSpreadAttributes2'), [attribute.argument])
                )
              );

              return className.push(
                types.callExpression(types.identifier('decodeJSXSpreadAttributes2'), [attribute.argument])
              );
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
        fs.writeFileSync(pathFromRoot('/private/design.css'), css());

        path.unshiftContainer('body', [
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('decodeJSXSpreadAttributes2'))],
            types.stringLiteral(pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/decodeJSXSpreadAttributes'))
          ),
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier('deleteFromJSXSpreadAttributes2'))],
            types.stringLiteral(
              pathFromRoot('/node_modules/@warden-sk/babel-plugin/private/deleteFromJSXSpreadAttributes')
            )
          ),
          //------------------------------------------------------------------------------------------------------------
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
