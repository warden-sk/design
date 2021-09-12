"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function _1(_2, ..._3) {
    for (const _4 of _3)
        for (const _5 in _4) {
            const _6 = _4[_5], _7 = _2[_5];
            _2[_5] = 'object' !== typeof _6 || 'object' !== typeof _7 ? _6 : _1(_7, _6);
        }
    return _2;
}
exports.default = _1;
