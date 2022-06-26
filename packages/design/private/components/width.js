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
function width(columns) {
    const $ = allowedJSXAttributes_1.default['width'];
    return (0, forBreakpoints_1.default)(([breakpointName]) => ({
        // .width-0
        [`.${breakpointName}${$}0`]: {
            width: '0',
        },
        // .width-1/12
        ...[...new Array(columns - 1)].reduce((_, __, i) => ({
            ..._,
            [`.${breakpointName}${$}${i + 1}\\/${columns}`]: {
                width: (0, percentage_1.default)(i + 1, columns),
            },
        }), {}),
        // .width-100
        [`.${breakpointName}${$}100`]: {
            width: '100%',
        },
        // .width-auto
        [`.${breakpointName}${$}auto`]: {
            width: 'auto',
        },
    }));
}
exports.default = width;
