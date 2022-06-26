"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function encodePropertyName(propertyName) {
    return propertyName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}
function toString(properties, $ = false) {
    let css = '';
    for (const propertyName in properties) {
        const property = properties[propertyName];
        if (typeof property === 'number' || typeof property === 'string') {
            css += `${encodePropertyName(propertyName)}:${property}${$ ? ' !important;' : ';'}`;
        }
        if (typeof property === 'object') {
            css += `${propertyName}{${toString(property)}}`;
        }
    }
    return css;
}
exports.default = toString;
