"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedJSXAttributes_1 = __importDefault(require("./private/allowedJSXAttributes"));
const core_1 = __importDefault(require("@babel/core"));
exports.default = () => {
    return {
        visitor: {
            JSXOpeningElement(path) {
                if (core_1.default.types.isJSXIdentifier(path.node.name)) {
                    const attributes = [];
                    const className = [];
                    path.node.attributes.forEach(attribute => {
                        if (core_1.default.types.isJSXAttribute(attribute)) {
                            if (core_1.default.types.isJSXIdentifier(attribute.name)) {
                                /* (1) */
                                if (attribute.name.name === 'className') {
                                    /* (1.1) */
                                    if (core_1.default.types.isJSXExpressionContainer(attribute.value)) {
                                        if (core_1.default.types.isExpression(attribute.value.expression)) {
                                            return className.push(attribute.value.expression);
                                        }
                                    }
                                    /* (1.2) */
                                    if (core_1.default.types.isStringLiteral(attribute.value)) {
                                        return className.push(attribute.value);
                                    }
                                }
                                /* (2) */
                                if (attribute.name.name in allowedJSXAttributes_1.default) {
                                    /* (2.1) */
                                    if (core_1.default.types.isJSXExpressionContainer(attribute.value)) {
                                        if (core_1.default.types.isExpression(attribute.value.expression)) {
                                            return className.push(core_1.default.types.callExpression(core_1.default.types.identifier('decodeResponsiveClassName'), [
                                                core_1.default.types.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                                attribute.value.expression,
                                            ]));
                                        }
                                    }
                                    /* (2.2) */
                                    if (core_1.default.types.isStringLiteral(attribute.value)) {
                                        return className.push(core_1.default.types.callExpression(core_1.default.types.identifier('decodeResponsiveClassName'), [
                                            core_1.default.types.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                            attribute.value,
                                        ]));
                                    }
                                }
                            }
                        }
                        attributes.push(attribute);
                    });
                    if (className.length) {
                        attributes.push(core_1.default.types.jsxAttribute(core_1.default.types.jsxIdentifier('className'), core_1.default.types.jsxExpressionContainer(core_1.default.types.callExpression(core_1.default.types.identifier('decodeClassName'), [
                            core_1.default.types.arrayExpression(className),
                        ]))));
                    }
                    path.node.attributes = attributes;
                }
            },
            Program(path) {
                path.unshiftContainer('body', [
                    core_1.default.types.importDeclaration([], core_1.default.types.stringLiteral('@warden-sk/design/public/index.css')),
                    core_1.default.types.importDeclaration([core_1.default.types.importDefaultSpecifier(core_1.default.types.identifier('decodeClassName'))], core_1.default.types.stringLiteral('@warden-sk/babel-plugin/private/decodeClassName')),
                    core_1.default.types.importDeclaration([core_1.default.types.importDefaultSpecifier(core_1.default.types.identifier('decodeResponsiveClassName'))], core_1.default.types.stringLiteral('@warden-sk/babel-plugin/private/decodeResponsiveClassName')),
                ]);
            },
        },
    };
};
