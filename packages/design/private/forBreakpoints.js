"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
const breakpoints = [
    ['\\#', '40rem'],
    ['\\#\\#', '48rem'],
    ['\\#\\#\\#', '64rem'], // 1024px
];
function forBreakpoints(on) {
    return breakpoints.reduce((_, breakpoint) => ({
        ..._,
        [`@media(min-width:${breakpoint[1]})`]: on(breakpoint),
    }), on(['', '']));
}
exports.default = forBreakpoints;
