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
function flexBasis(columns) {
    const $ = allowedJSXAttributes_1.default['flexBasis'];
    return (0, forBreakpoints_1.default)(([breakpoint]) => ({
        // .flex-basis-0
        [`.${breakpoint}${$}0`]: {
            flexBasis: '0',
        },
        // .flex-basis-1/12
        ...[...Array(columns - 1)].reduce((_, __, i) => ({
            ..._,
            [`.${breakpoint}${$}${i + 1}\\/${columns}`]: {
                flexBasis: (0, percentage_1.default)(i + 1, columns),
            },
        }), {}),
        // .flex-basis-100
        [`.${breakpoint}${$}100`]: {
            flexBasis: '100%',
        },
        // .flex-basis-auto
        [`.${breakpoint}${$}auto`]: {
            flexBasis: 'auto',
        },
    }));
}
exports.default = flexBasis;
