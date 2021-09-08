"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatPropertyName_1 = __importDefault(require("./formatPropertyName"));
function toString(properties) {
    let css = '';
    for (const propertyName in properties) {
        const property = properties[propertyName];
        if (typeof property === 'number' || typeof property === 'string')
            css += `${(0, formatPropertyName_1.default)(propertyName)}:${property};`;
        if (typeof property === 'object')
            css += `${propertyName}{${toString(property)}}`;
    }
    return css;
}
exports.default = toString;
