"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedJSXAttributes_1 = __importDefault(require("../../../babel-plugin/private/allowedJSXAttributes"));
const forBreakpoints_1 = __importDefault(require("../forBreakpoints"));
const percentage_1 = __importDefault(require("../percentage"));
function width() {
    const columns = 12;
    const $ = allowedJSXAttributes_1.default['width'];
    return (0, forBreakpoints_1.default)(([b]) => ({
        // .width-0
        [`.${b}${$}0`]: { width: '0 !important' },
        // .width-1/12
        ...[...Array(columns - 1)].reduce((_, __, i) => ({
            ..._,
            [`.${b}${$}${i + 1}\\/${columns}`]: { width: `${(0, percentage_1.default)(i + 1, columns)} !important` },
        }), {}),
        // .width-100
        [`.${b}${$}100`]: { width: '100% !important' },
        // .width-auto
        [`.${b}${$}auto`]: { width: 'auto !important' },
    }));
}
exports.default = width;
