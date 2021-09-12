"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function t(t) {
    return t && 'object' === typeof t && !Array.isArray(t);
}
// @ts-ignore
function n(r, ...e) {
    if (!e.length)
        return r;
    const i = e.shift();
    if (t(r) && t(i))
        for (const e in i)
            t(i[e]) ? (r[e] || Object.assign(r, { [e]: {} }), n(r[e], i[e])) : Object.assign(r, { [e]: i[e] });
    return n(r, ...e);
}
exports.default = n;
