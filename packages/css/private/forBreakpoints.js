"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const breakpoints_1 = __importDefault(require("./breakpoints"));
function forBreakpoints(_1) {
    return breakpoints_1.default.reduce((_2, { name, size }) => ({ ..._2, [`@media(min-width:${size})`]: _1(name) }), _1(''));
}
exports.default = forBreakpoints;
