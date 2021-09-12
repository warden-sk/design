"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const breakpoints_1 = __importDefault(require("./breakpoints"));
function forBreakpoints(on) {
    return breakpoints_1.default.reduce((_, breakpoint) => ({ ..._, [`@media(min-width:${breakpoint[1]})`]: on(breakpoint) }), on(['', '']));
}
exports.default = forBreakpoints;
