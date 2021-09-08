"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forBreakpoints_1 = __importDefault(require("./forBreakpoints"));
const sizes_1 = __importDefault(require("./sizes"));
const toString_1 = __importDefault(require("./toString"));
function spacing() {
    return (0, forBreakpoints_1.default)(b => {
        function css(l, p, r) {
            return {
                [`.${b}${p[0]}-${l}`]: { [p]: `${r} !important` },
                // "b", "y"
                [`.${b}${p[0]}-b-${l},.${b}${p[0]}-y-${l}`]: { [`${p}Bottom`]: `${r} !important` },
                // "l", "x"
                [`.${b}${p[0]}-l-${l},.${b}${p[0]}-x-${l}`]: { [`${p}Left`]: `${r} !important` },
                // "r", "x"
                [`.${b}${p[0]}-r-${l},.${b}${p[0]}-x-${l}`]: { [`${p}Right`]: `${r} !important` },
                // "t", "y"
                [`.${b}${p[0]}-t-${l},.${b}${p[0]}-y-${l}`]: { [`${p}Top`]: `${r} !important` },
            };
        }
        return {
            // .m-!1
            ...sizes_1.default.reduce((_, [l, r]) => (r === '0' ? _ : { ..._, ...css(`\\!${l}`, 'margin', `-${r}`) }), {}),
            // .m-0
            ...sizes_1.default.reduce((_, [l, r]) => ({ ..._, ...css(l, 'margin', r) }), {}),
            // .m-auto
            ...css('auto', 'margin', 'auto'),
            // .p-0
            ...sizes_1.default.reduce((_, [l, r]) => ({ ..._, ...css(l, 'padding', r) }), {}),
        };
    });
}
function width() {
    const columns = 12;
    function percentage(_1) {
        return `${(100 * _1) / columns}%`;
    }
    return (0, forBreakpoints_1.default)(b => ({
        [`.${b}width-0`]: { width: '0 !important' },
        // .width-1/12
        ...[...Array(columns - 1)].reduce((...[_, , i]) => ({
            ..._,
            [`.${b}width-${i + 1}\\/${columns}`]: { width: `${percentage(i + 1)} !important` },
        }), {}),
        [`.${b}width-100`]: { width: '100% !important' },
        [`.${b}width-auto`]: { width: 'auto !important' },
    }));
}
console.log((0, toString_1.default)({ ...spacing(), ...width() }));
