"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedAttributes_1 = __importDefault(require("./allowedAttributes"));
function default_1({ types: t }) {
    return {
        visitor: {
            JSXOpeningElement(path, state) {
                const attributes = [];
                const className = [];
                path.node.attributes.forEach(attribute => {
                    if (t.isJSXAttribute(attribute)) {
                        if (t.isJSXIdentifier(attribute.name)) {
                            //                              ⬇️ JSXAttribute
                            const { name: attributeName } = attribute.name;
                            if (attributeName === 'className') {
                                if (t.isJSXExpressionContainer(attribute.value)) {
                                    if (t.isExpression(attribute.value.expression)) {
                                        className.push(attribute.value.expression);
                                        return;
                                    }
                                }
                                if (t.isStringLiteral(attribute.value)) {
                                    className.push(attribute.value);
                                    return;
                                }
                                return;
                            }
                            if (attributeName in allowedAttributes_1.default) {
                                if (t.isJSXExpressionContainer(attribute.value)) {
                                    if (t.isExpression(attribute.value.expression)) {
                                        className.push(t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                                            t.stringLiteral(allowedAttributes_1.default[attribute.name.name]),
                                            attribute.value.expression,
                                        ]));
                                        return;
                                    }
                                }
                                if (t.isStringLiteral(attribute.value)) {
                                    className.push(t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                                        t.stringLiteral(allowedAttributes_1.default[attribute.name.name]),
                                        attribute.value,
                                    ]));
                                    return;
                                }
                            }
                        }
                    }
                    attributes.push(attribute);
                });
                if (className.length) {
                    attributes.push(t.jsxAttribute(t.jsxIdentifier('className'), t.jsxExpressionContainer(t.callExpression(state.decodeClassNameIdentifier, [t.arrayExpression(className)]))));
                }
                path.node.attributes = attributes;
            },
            Program: {
                enter(path, state) {
                    state.decodeClassNameIdentifier = t.identifier('decodeClassName');
                    state.decodeResponsiveClassNameIdentifier = t.identifier('decodeResponsiveClassName');
                },
                exit(path, state) {
                    path.unshiftContainer('body', [
                        t.importDeclaration([t.importDefaultSpecifier(state.decodeClassNameIdentifier)], t.stringLiteral('@warden-sk/design/private/helpers/decodeClassName')),
                        t.importDeclaration([t.importDefaultSpecifier(state.decodeResponsiveClassNameIdentifier)], t.stringLiteral('@warden-sk/design/private/helpers/decodeResponsiveClassName')),
                    ]);
                },
            },
        },
    };
}
exports.default = default_1;
