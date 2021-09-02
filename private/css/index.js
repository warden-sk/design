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
    return (0, forBreakpoints_1.default)(({ name: b }) => {
        function auto() {
            return {
                [`.${b}m-auto`]: { margin: 'auto !important' },
                [`.${b}m-b-auto, .${b}m-y-auto`]: { marginBottom: 'auto !important' },
                [`.${b}m-l-auto, .${b}m-x-auto`]: { marginLeft: 'auto !important' },
                [`.${b}m-r-auto, .${b}m-x-auto`]: { marginRight: 'auto !important' },
                [`.${b}m-t-auto, .${b}m-y-auto`]: { marginTop: 'auto !important' },
            };
        }
        function _1(p) {
            return sizes_1.default.reduce((_, { name, size }) => ({
                ..._,
                [`.${b}${p[0]}-${name}`]: { [p]: `${size} !important` },
                [`.${b}${p[0]}-b-${name}, .${b}${p[0]}-y-${name}`]: { [`${p}Bottom`]: `${size} !important` },
                [`.${b}${p[0]}-l-${name}, .${b}${p[0]}-x-${name}`]: { [`${p}Left`]: `${size} !important` },
                [`.${b}${p[0]}-r-${name}, .${b}${p[0]}-x-${name}`]: { [`${p}Right`]: `${size} !important` },
                [`.${b}${p[0]}-t-${name}, .${b}${p[0]}-y-${name}`]: { [`${p}Top`]: `${size} !important` },
            }), {});
        }
        const _2 = sizes_1.default.reduce((_, { name, size }) => size === '0'
            ? _
            : {
                ..._,
                [`.${b}m-\\!${name}`]: { margin: `-${size} !important` },
                [`.${b}m-b-\\!${name}, .${b}m-y-\\!${name}`]: { marginBottom: `-${size} !important` },
                [`.${b}m-l-\\!${name}, .${b}m-x-\\!${name}`]: { marginLeft: `-${size} !important` },
                [`.${b}m-r-\\!${name}, .${b}m-x-\\!${name}`]: { marginRight: `-${size} !important` },
                [`.${b}m-t-\\!${name}, .${b}m-y-\\!${name}`]: { marginTop: `-${size} !important` },
            }, {});
        return {
            ...auto(),
            ..._1('margin'),
            ..._1('padding'),
            ..._2,
        };
    });
}
console.log((0, toString_1.default)(spacing()));
