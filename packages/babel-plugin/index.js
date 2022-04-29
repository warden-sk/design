"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("@babel/types"));
const allowedJSXAttributes_1 = __importDefault(require("./private/allowedJSXAttributes"));
exports.default = () => ({
    visitor: {
        JSXOpeningElement(path) {
            if (t.isJSXIdentifier(path.node.name)) {
                const attributes = [];
                const className = [];
                path.node.attributes.forEach(attribute => {
                    if (t.isJSXAttribute(attribute)) {
                        if (t.isJSXIdentifier(attribute.name)) {
                            /* (1) */
                            if (attribute.name.name === 'className') {
                                /* (1.1) */
                                if (t.isJSXExpressionContainer(attribute.value)) {
                                    if (t.isExpression(attribute.value.expression)) {
                                        return className.push(attribute.value.expression);
                                    }
                                }
                                /* (1.2) */
                                if (t.isStringLiteral(attribute.value)) {
                                    return className.push(attribute.value);
                                }
                            }
                            /* (2) */
                            if (attribute.name.name in allowedJSXAttributes_1.default) {
                                /* (2.1) */
                                if (t.isJSXExpressionContainer(attribute.value)) {
                                    if (t.isExpression(attribute.value.expression)) {
                                        return className.push(t.callExpression(t.identifier('decodeResponsiveClassName'), [
                                            t.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                            attribute.value.expression,
                                        ]));
                                    }
                                }
                                /* (2.2) */
                                if (t.isStringLiteral(attribute.value)) {
                                    return className.push(t.callExpression(t.identifier('decodeResponsiveClassName'), [
                                        t.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                        attribute.value,
                                    ]));
                                }
                            }
                        }
                    }
                    attributes.push(attribute);
                });
                if (className.length) {
                    attributes.push(t.jsxAttribute(t.jsxIdentifier('className'), t.jsxExpressionContainer(t.callExpression(t.identifier('decodeClassName'), [t.arrayExpression(className)]))));
                }
                path.node.attributes = attributes;
            }
        },
        Program(path) {
            path.unshiftContainer('body', [
                t.importDeclaration([], t.stringLiteral('@warden-sk/design/public/index.css')),
                t.importDeclaration([t.importDefaultSpecifier(t.identifier('decodeClassName'))], t.stringLiteral('@warden-sk/babel-plugin/private/decodeClassName')),
                t.importDeclaration([t.importDefaultSpecifier(t.identifier('decodeResponsiveClassName'))], t.stringLiteral('@warden-sk/babel-plugin/private/decodeResponsiveClassName')),
            ]);
        },
    },
});
