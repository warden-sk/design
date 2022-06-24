"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const t = __importStar(require("./storage"));
const allowedJSXAttributes_1 = __importDefault(require("../../babel-plugin/private/allowedJSXAttributes"));
const container_1 = __importDefault(require("./components/container"));
const flexBasis_1 = __importDefault(require("./components/flexBasis"));
const fontSize_1 = __importDefault(require("./components/fontSize"));
const forBreakpoints_1 = __importDefault(require("./forBreakpoints"));
const height_1 = __importDefault(require("./components/height"));
const lineHeight_1 = __importDefault(require("./components/lineHeight"));
const spacing_1 = __importDefault(require("./components/spacing"));
const toString_1 = __importDefault(require("./toString"));
const width_1 = __importDefault(require("./components/width"));
function toHelper(propertyName, type) {
    return (0, forBreakpoints_1.default)(([b]) => type.reduce((_, property) => ({
        ..._,
        [`.${b}${allowedJSXAttributes_1.default[propertyName]}${property}`]: { [propertyName]: `${property} !important` },
    }), {}));
}
const alignContent = toHelper('alignContent', t.AlignContent);
const alignItems = toHelper('alignItems', t.AlignItems);
const alignSelf = toHelper('alignSelf', t.AlignSelf);
const display = toHelper('display', t.Display);
const flex = toHelper('flex', t.Flex);
const flexDirection = toHelper('flexDirection', t.FlexDirection);
const flexWrap = toHelper('flexWrap', t.FlexWrap);
const fontWeight = toHelper('fontWeight', t.FontWeight);
const justifyContent = toHelper('justifyContent', t.JustifyContent);
const justifyItems = toHelper('justifyItems', t.JustifyItems);
const justifySelf = toHelper('justifySelf', t.JustifySelf);
const textAlign = toHelper('textAlign', t.TextAlign);
const css = [
    {
        '*,*::before,*::after': {
            boxSizing: 'border-box',
        },
        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
        'a:hover': {
            textDecoration: 'underline',
        },
        body: {
            fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
            margin: 0,
        },
        'h1,h2,h3,h4,h5,h6': {
            fontSize: 'inherit',
            fontWeight: 'inherit',
        },
        'h1,h2,h3,h4,h5,h6,p': {
            margin: 0,
        },
        html: {
            WebkitTextSizeAdjust: '100%',
            fontSize: '16px',
            lineHeight: 1.5,
        },
    },
    alignContent,
    alignItems,
    alignSelf,
    (0, container_1.default)(),
    display,
    flex,
    (0, flexBasis_1.default)(),
    flexDirection,
    flexWrap,
    (0, fontSize_1.default)(),
    fontWeight,
    (0, height_1.default)(),
    justifyContent,
    justifyItems,
    justifySelf,
    (0, lineHeight_1.default)(),
    (0, spacing_1.default)(),
    textAlign,
    (0, width_1.default)(),
];
console.log(css.reduce((l, r) => l + (0, toString_1.default)(r), ''));
