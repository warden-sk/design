"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function percentage(l, r) {
    return ((l / r) * 100).toFixed(2).replace(/\.0+$/, '') + '%';
}
exports.default = percentage;
