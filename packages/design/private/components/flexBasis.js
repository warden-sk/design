"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forBreakpoints_1 = __importDefault(require("../forBreakpoints"));
const allowedJSXAttributes_1 = __importDefault(require("../../../babel-plugin/private/allowedJSXAttributes"));
const percentage_1 = __importDefault(require("../percentage"));
function flexBasis() {
    const columns = 12;
    const $ = allowedJSXAttributes_1.default['flexBasis'];
    return (0, forBreakpoints_1.default)(([b]) => ({
        // .flex-basis-0
        [`.${b}${$}0`]: { flexBasis: '0 !important' },
        // .flex-basis-1/12
        ...[...Array(columns - 1)].reduce((_, __, i) => ({
            ..._,
            [`.${b}${$}${i + 1}\\/${columns}`]: { flexBasis: `${(0, percentage_1.default)(i + 1, columns)} !important` },
        }), {}),
        // .flex-basis-100
        [`.${b}${$}100`]: { flexBasis: '100% !important' },
        // .flex-basis-auto
        [`.${b}${$}auto`]: { flexBasis: 'auto !important' },
    }));
}
exports.default = flexBasis;
