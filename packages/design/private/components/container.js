"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forBreakpoints_1 = __importDefault(require("../forBreakpoints"));
function container() {
    return (0, forBreakpoints_1.default)(b => b[0] ? { '.container': { maxWidth: `${b[1]} !important` } } : { '.container': { width: '100% !important' } });
}
exports.default = container;
