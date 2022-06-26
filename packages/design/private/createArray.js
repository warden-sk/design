"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createArray(length) {
    const $ = [];
    for (let i = 0; i < length; i++) {
        $[i] = i;
    }
    return $;
}
exports.default = createArray;
