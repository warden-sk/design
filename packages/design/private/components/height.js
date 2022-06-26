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
function height() {
    const $ = allowedJSXAttributes_1.default['height'];
    return (0, forBreakpoints_1.default)(([breakpointName]) => ({
        // .height-0
        [`.${breakpointName}${$}0`]: {
            height: '0',
        },
        // .height-100
        [`.${breakpointName}${$}100`]: {
            height: '100%',
        },
        // .height-auto
        [`.${breakpointName}${$}auto`]: {
            height: 'auto',
        },
    }));
}
exports.default = height;
