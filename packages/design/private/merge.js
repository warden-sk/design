"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isObject(_1) {
    return _1 !== null && typeof _1 === 'object';
}
function merge(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                merge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return merge(target, ...sources);
}
exports.default = merge;
