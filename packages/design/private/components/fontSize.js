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
const fontSizes = [
    ['1', '0.75rem'],
    ['2', '0.875rem'],
    ['3', '1rem'],
    ['4', '1.125rem'],
    ['5', '1.25rem'],
    ['6', '1.5rem'],
    ['7', '1.75rem'],
    ['8', '2rem'],
    ['9', '2.25rem'],
    ['10', '2.5rem'],
    ['11', '2.75rem'],
    ['12', '3rem'], //    48px
];
function fontSize() {
    const $ = allowedJSXAttributes_1.default['fontSize'];
    return (0, forBreakpoints_1.default)(([breakpoint]) => fontSizes.reduce((css, [left, right]) => ({
        ...css,
        [`.${breakpoint}${$}${left}`]: {
            fontSize: right,
        },
    }), {}));
}
exports.default = fontSize;
