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
// @ts-ignore
const t = __importStar(require("@types/warden-sk__design/types"));
const forBreakpoints_1 = __importDefault(require("./forBreakpoints"));
const allowedJSXAttributes_1 = __importDefault(require("../../babel-plugin/private/allowedJSXAttributes"));
const container_1 = __importDefault(require("./components/container"));
const spacing_1 = __importDefault(require("./components/spacing"));
const toString_1 = __importDefault(require("./toString"));
const width_1 = __importDefault(require("./components/width"));
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
const textAlign = toHelper('textAlign', t.TextAlign);
const fontSizes = [
    ['1', '0.75rem'],
    ['2', '1rem'],
    ['3', '1.25rem'],
    ['4', '1.5rem'],
    ['5', '1.75rem'],
    ['6', '2rem'],
];
const fontSize = (0, forBreakpoints_1.default)(([b]) => fontSizes.reduce((_, [l, r]) => ({ ..._, [`.${b}${allowedJSXAttributes_1.default['fontSize']}-${l}`]: `${r} !important` }), {}));
const css = [
    {
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
    },
    alignContent,
    alignItems,
    alignSelf,
    (0, container_1.default)(),
    display,
    flex,
    flexDirection,
    flexWrap,
    fontSize,
    justifyContent,
    justifyItems,
    justifySelf,
    (0, spacing_1.default)(),
    textAlign,
    (0, width_1.default)(),
];
console.log(css.reduce((_, __) => _ + (0, toString_1.default)(__), ''));
