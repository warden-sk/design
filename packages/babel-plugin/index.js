"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedJSXAttributes_1 = __importDefault(require("./private/allowedJSXAttributes"));
const package_json_1 = __importDefault(require("./package.json"));
function default_1({ types: t }) {
    return {
        visitor: {
            JSXOpeningElement(path) {
                const attributes = [];
                const className = [];
                path.node.attributes.forEach(attribute => {
                    if (t.isJSXAttribute(attribute))
                        if (t.isJSXIdentifier(attribute.name)) {
                            if (attribute.name.name === 'className') {
                                if (t.isJSXExpressionContainer(attribute.value))
                                    if (t.isExpression(attribute.value.expression))
                                        return className.push(attribute.value.expression);
                                if (t.isStringLiteral(attribute.value))
                                    return className.push(attribute.value);
                            }
                            if (attribute.name.name in allowedJSXAttributes_1.default) {
                                if (t.isJSXExpressionContainer(attribute.value))
                                    if (t.isExpression(attribute.value.expression))
                                        return className.push(t.callExpression(t.identifier('decodeResponsiveClassName'), [
                                            t.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                            attribute.value.expression,
                                        ]));
                                if (t.isStringLiteral(attribute.value))
                                    return className.push(t.callExpression(t.identifier('decodeResponsiveClassName'), [
                                        t.stringLiteral(allowedJSXAttributes_1.default[attribute.name.name]),
                                        attribute.value,
                                    ]));
                            }
                        }
                    attributes.push(attribute);
                });
                if (className.length)
                    attributes.push(t.jsxAttribute(t.jsxIdentifier('className'), t.jsxExpressionContainer(t.callExpression(t.identifier('decodeClassName'), [t.arrayExpression(className)]))));
                path.node.attributes = attributes;
            },
            Program(path) {
                path.unshiftContainer('body', [
                    t.importDeclaration([t.importDefaultSpecifier(t.identifier('decodeClassName'))], t.stringLiteral(`${package_json_1.default.name}/private/decodeClassName`)),
                    t.importDeclaration([t.importDefaultSpecifier(t.identifier('decodeResponsiveClassName'))], t.stringLiteral(`${package_json_1.default.name}/private/decodeResponsiveClassName`)),
                ]);
            },
        },
    };
}
exports.default = default_1;
