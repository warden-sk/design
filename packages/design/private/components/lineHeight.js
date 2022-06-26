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
const lineHeights = [
    ['1', '1'],
    ['2', '1.25'],
    ['3', '1.5'],
    ['4', '1.75'],
    ['5', '2'],
];
function lineHeight() {
    const $ = allowedJSXAttributes_1.default['lineHeight'];
    return (0, forBreakpoints_1.default)(([breakpointName]) => lineHeights.reduce((css, [left, right]) => ({
        ...css,
        [`.${breakpointName}${$}${left}`]: {
            lineHeight: right,
        },
    }), {}));
}
exports.default = lineHeight;
