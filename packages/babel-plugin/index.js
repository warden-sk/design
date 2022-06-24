"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedJSXAttributes_1 = __importDefault(require("./private/allowedJSXAttributes"));
exports.default = (babel) => {
    return {
        visitor: {
            JSXOpeningElement(path) {
                if (babel.types.isJSXIdentifier(path.node.name)) {
                    const attributes = [];
                    const className = [];
                    path.node.attributes.forEach(attribute => {
                        if (babel.types.isJSXAttribute(attribute)) {
                            if (babel.types.isJSXIdentifier(attribute.name)) {
                                /* (1) */
                                if (attribute.name.name === 'className') {
                                    /* (1.1) */
                                    if (babel.types.isJSXExpressionContainer(attribute.value)) {
                                        if (babel.types.isExpression(attribute.value.expression)) {
                                            return className.push(attribute.value.expression);
                                        }
                                    }
                                    /* (1.2) */
                                    if (babel.types.isStringLiteral(attribute.value)) {
                                        return className.push(attribute.value);
                                    }
                                }
                                /* (2) */
                                if (attribute.name.name in allowedJSXAttributes_1.default) {
                                    /* (2.1) */
                                    if (babel.types.isJSXExpressionContainer(attribute.value)) {
                                        if (babel.types.isExpression(attribute.value.expression)) {
                                            return className.push(babel.types.callExpression(babel.types.identifier('decodeResponsiveClassName'), [
                                                babel.types.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                                attribute.value.expression,
                                            ]));
                                        }
                                    }
                                    /* (2.2) */
                                    if (babel.types.isStringLiteral(attribute.value)) {
                                        return className.push(babel.types.callExpression(babel.types.identifier('decodeResponsiveClassName'), [
                                            babel.types.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                            attribute.value,
                                        ]));
                                    }
                                }
                            }
                        }
                        attributes.push(attribute);
                    });
                    if (className.length) {
                        attributes.push(babel.types.jsxAttribute(babel.types.jsxIdentifier('className'), babel.types.jsxExpressionContainer(babel.types.callExpression(babel.types.identifier('decodeClassName'), [
                            babel.types.arrayExpression(className),
                        ]))));
                    }
                    path.node.attributes = attributes;
                }
            },
            Program(path) {
                path.unshiftContainer('body', [
                    babel.types.importDeclaration([], babel.types.stringLiteral('@warden-sk/design/public/index.css')),
                    babel.types.importDeclaration([babel.types.importDefaultSpecifier(babel.types.identifier('decodeClassName'))], babel.types.stringLiteral('@warden-sk/babel-plugin/private/decodeClassName')),
                    babel.types.importDeclaration([babel.types.importDefaultSpecifier(babel.types.identifier('decodeResponsiveClassName'))], babel.types.stringLiteral('@warden-sk/babel-plugin/private/decodeResponsiveClassName')),
                ]);
            },
        },
    };
};
