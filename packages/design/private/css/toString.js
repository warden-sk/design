"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isReactCSSProperties(property, properties) {
    return !/^@/.test(property);
}
function propertiesToString(properties) {
    let css = '';
    for (const property in properties) {
        // from "alignContent" to "align-content"
        const _ = property.replace(/[A-Z]/g, _3 => `-${_3.toLowerCase()}`);
        css += `${_}:${properties[property]};`;
    }
    return css;
}
function toString(before) {
    let after = '';
    for (const property in before) {
        const properties = before[property];
        isReactCSSProperties(property, properties)
            ? (after += `${property}{${propertiesToString(properties)}}`)
            : (after += `${property}{${toString(properties)}}`);
    }
    return after;
}
exports.default = toString;