"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("../../babel-plugin/private/types"));
const forBreakpoints_1 = __importDefault(require("./forBreakpoints"));
const allowedJSXAttributes_1 = __importDefault(require("../../babel-plugin/private/allowedJSXAttributes"));
const m_1 = __importDefault(require("./m"));
const sizes_1 = __importDefault(require("./sizes"));
const toString_1 = __importDefault(require("./toString"));
function toHelper(propertyName, type) {
    return (0, forBreakpoints_1.default)(([b]) => type.reduce((_, property) => ({
        ..._,
        [`.${b}${allowedJSXAttributes_1.default[propertyName]}-${property}`]: { [propertyName]: `${property} !important` },
    }), {}));
}
const alignContent = toHelper('alignContent', t.AlignContent);
const alignItems = toHelper('alignItems', t.AlignItems);
const alignSelf = toHelper('alignSelf', t.AlignSelf);
const display = toHelper('display', t.Display);
const flex = toHelper('flex', t.Flex);
const flexDirection = toHelper('flexDirection', t.FlexDirection);
const flexWrap = toHelper('flexWrap', t.FlexWrap);
const justifyContent = toHelper('justifyContent', t.JustifyContent);
const justifyItems = toHelper('justifyItems', t.JustifyItems);
const justifySelf = toHelper('justifySelf', t.JustifySelf);
function container() {
    return (0, forBreakpoints_1.default)(b => b[0] ? { '.container': { maxWidth: `${b[1]} !important` } } : { '.container': { width: '100% !important' } });
}
function spacing() {
    const columns = 12;
    return (0, forBreakpoints_1.default)(([b]) => {
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
    return (0, forBreakpoints_1.default)(([b]) => ({
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
const css = (0, m_1.default)({
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
}, alignContent, alignItems, alignSelf, container(), display, flex, flexDirection, flexWrap, justifyContent, justifyItems, justifySelf, spacing(), width());
console.log((0, toString_1.default)(css));
