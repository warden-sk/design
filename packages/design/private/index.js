"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const forBreakpoints_1 = __importDefault(require("./forBreakpoints"));
const sizes_1 = __importDefault(require("./sizes"));
const toString_1 = __importDefault(require("./toString"));
function test(_1, _2) {
    const _3 = _2.replace(/[A-Z]/g, _4 => `-${_4.toLowerCase()}`);
    return (0, forBreakpoints_1.default)(b => _1.reduce((_, p) => ({ ..._, [`.${b}${_3}-${p}`]: { [_2]: `${p} !important` } }), {}));
}
const alignContent = test(types_1.AlignContent, 'alignContent');
const alignItems = test(types_1.AlignItems, 'alignItems');
const alignSelf = test(types_1.AlignSelf, 'alignSelf');
const flex = test(types_1.Flex, 'flex');
const flexDirection = test(types_1.FlexDirection, 'flexDirection');
const flexWrap = test(types_1.FlexWrap, 'flexWrap');
const justifyContent = test(types_1.JustifyContent, 'justifyContent');
const justifyItems = test(types_1.JustifyItems, 'justifyItems');
const justifySelf = test(types_1.JustifySelf, 'justifySelf');
function spacing() {
    const columns = 12;
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
            // .m-l-1/12
            ...[...Array(columns - 1)].reduce((_, __, i) => ({
                ..._,
                [`.${b}m-l-${i + 1}\\/${columns}`]: { marginLeft: `${((i + 1) / columns) * 100}% !important` },
            }), {}),
            // .p-0
            ...sizes_1.default.reduce((_, [l, r]) => ({ ..._, ...css(l, 'padding', r) }), {}),
        };
    });
}
function width() {
    const columns = 12;
    return (0, forBreakpoints_1.default)(b => ({
        // .width-0
        [`.${b}width-0`]: { width: '0 !important' },
        // .width-1/12
        ...[...Array(columns - 1)].reduce((_, __, i) => ({
            ..._,
            [`.${b}width-${i + 1}\\/${columns}`]: { width: `${((i + 1) / columns) * 100}% !important` },
        }), {}),
        // .width-100
        [`.${b}width-100`]: { width: '100% !important' },
        // .width-auto
        [`.${b}width-auto`]: { width: 'auto !important' },
    }));
}
console.log((0, toString_1.default)({
    ...alignContent,
    ...alignItems,
    ...alignSelf,
    ...flex,
    ...flexDirection,
    ...flexWrap,
    ...justifyContent,
    ...justifyItems,
    ...justifySelf,
    ...spacing(),
    ...width(),
}));
