"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commonParameters_1 = __importDefault(require("./commonParameters"));
function Test({ types: t }) {
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
                            if (attribute.name.name in commonParameters_1.default) {
                                if (t.isStringLiteral(attribute.value)) {
                                    className.push(t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                                        t.stringLiteral(commonParameters_1.default[attribute.name.name]),
                                        attribute.value,
                                    ]));
                                    return;
                                }
                                if (t.isJSXExpressionContainer(attribute.value)) {
                                    className.push(t.callExpression(state.decodeResponsiveClassNameIdentifier, [
                                        t.stringLiteral(commonParameters_1.default[attribute.name.name]),
                                        // @ts-ignore
                                        attribute.value.expression,
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
                    state.yes = true;
                }
                path.node.attributes = attributes;
            },
            Program: {
                enter(path, state) {
                    state.decodeClassNameIdentifier = t.identifier('decodeClassName');
                    state.decodeResponsiveClassNameIdentifier = t.identifier('decodeResponsiveClassName');
                },
                exit(path, state) {
                    if (state.yes) {
                        path.node.body.unshift(t.importDeclaration([t.importDefaultSpecifier(state.decodeClassNameIdentifier)], t.stringLiteral('@warden-sk/design/private/helpers/decodeClassName')), t.importDeclaration([t.importDefaultSpecifier(state.decodeResponsiveClassNameIdentifier)], t.stringLiteral('@warden-sk/design/private/helpers/decodeResponsiveClassName')));
                    }
                },
            },
        },
    };
}
exports.default = Test;
