"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forBreakpoints_1 = __importDefault(require("../forBreakpoints"));
const percentage_1 = __importDefault(require("../percentage"));
const sizes = [
    ['0', '0'],
    ['1', '0.25rem'],
    ['2', '0.5rem'],
    ['3', '0.75rem'],
    ['4', '1rem'],
    ['5', '1.25rem'],
    ['6', '1.5rem'],
    ['7', '1.75rem'],
    ['8', '2rem'], //    32px
];
function spacing(columns) {
    return (0, forBreakpoints_1.default)(([breakpoint]) => {
        function css(l, p, r) {
            return {
                [`.${breakpoint}${p[0]}-${l}`]: { [p]: r },
                // "b", "y"
                [`.${breakpoint}${p[0]}-b-${l},.${breakpoint}${p[0]}-y-${l}`]: { [`${p}Bottom`]: r },
                // "l", "x"
                [`.${breakpoint}${p[0]}-l-${l},.${breakpoint}${p[0]}-x-${l}`]: { [`${p}Left`]: r },
                // "r", "x"
                [`.${breakpoint}${p[0]}-r-${l},.${breakpoint}${p[0]}-x-${l}`]: { [`${p}Right`]: r },
                // "t", "y"
                [`.${breakpoint}${p[0]}-t-${l},.${breakpoint}${p[0]}-y-${l}`]: { [`${p}Top`]: r },
            };
        }
        return {
            // .m-!1
            ...sizes.reduce((_, [l, r]) => (r === '0' ? _ : { ..._, ...css(`\\!${l}`, 'margin', `-${r}`) }), {}),
            // .m-0
            ...sizes.reduce((_, [l, r]) => ({ ..._, ...css(l, 'margin', r) }), {}),
            // .m-auto
            ...css('auto', 'margin', 'auto'),
            // .m-l-1/12
            ...[...new Array(columns - 1)].reduce((_, __, i) => ({
                ..._,
                [`.${breakpoint}m-l-${i + 1}\\/${columns}`]: { marginLeft: (0, percentage_1.default)(i + 1, columns) },
            }), {}),
            // .p-0
            ...sizes.reduce((_, [l, r]) => ({ ..._, ...css(l, 'padding', r) }), {}),
        };
    });
}
exports.default = spacing;
