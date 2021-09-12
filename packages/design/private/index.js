"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../babel-plugin/private/types");
const forBreakpoints_1 = __importDefault(require("./forBreakpoints"));
const formatPropertyName_1 = __importDefault(require("./formatPropertyName"));
const sizes_1 = __importDefault(require("./sizes"));
const toString_1 = __importDefault(require("./toString"));
function toHelper(propertyName, type) {
    return (0, forBreakpoints_1.default)(b => type.reduce((_, property) => ({
        ..._,
        [`.${b}${(0, formatPropertyName_1.default)(propertyName)}-${property}`]: { [propertyName]: `${property} !important` },
    }), {}));
}
const alignContent = toHelper('alignContent', types_1.AlignContent);
const alignItems = toHelper('alignItems', types_1.AlignItems);
const alignSelf = toHelper('alignSelf', types_1.AlignSelf);
const display = toHelper('display', types_1.Display);
const flex = toHelper('flex', types_1.Flex);
const flexDirection = toHelper('flexDirection', types_1.FlexDirection);
const flexWrap = toHelper('flexWrap', types_1.FlexWrap);
const justifyContent = toHelper('justifyContent', types_1.JustifyContent);
const justifyItems = toHelper('justifyItems', types_1.JustifyItems);
const justifySelf = toHelper('justifySelf', types_1.JustifySelf);
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
    '*,*::after,*::before': {
        boxSizing: 'border-box',
    },
    body: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        lineHeight: 1.5,
        margin: 0,
    },
    html: {
        WebkitTextSizeAdjust: '100%',
        fontSize: '16px',
    },
    ...alignContent,
    ...alignItems,
    ...alignSelf,
    ...display,
    ...flex,
    ...flexDirection,
    ...flexWrap,
    ...justifyContent,
    ...justifyItems,
    ...justifySelf,
    ...spacing(),
    ...width(),
}));
