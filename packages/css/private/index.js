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
    const i = (_) => `${_} !important`;
    return (0, forBreakpoints_1.default)(b => {
        function _1(p) {
            return sizes_1.default.reduce((_, { name, size }) => ({
                ..._,
                [`.${b}${p[0]}-${name}`]: { [p]: i(size) },
                [`.${b}${p[0]}-b-${name},.${b}${p[0]}-y-${name}`]: { [`${p}Bottom`]: i(size) },
                [`.${b}${p[0]}-l-${name},.${b}${p[0]}-x-${name}`]: { [`${p}Left`]: i(size) },
                [`.${b}${p[0]}-r-${name},.${b}${p[0]}-x-${name}`]: { [`${p}Right`]: i(size) },
                [`.${b}${p[0]}-t-${name},.${b}${p[0]}-y-${name}`]: { [`${p}Top`]: i(size) },
            }), {});
        }
        const _2 = sizes_1.default.reduce((_, { name, size }) => size === '0'
            ? _
            : {
                ..._,
                [`.${b}m-\\!${name}`]: { margin: i(`-${size}`) },
                [`.${b}m-b-\\!${name},.${b}m-y-\\!${name}`]: { marginBottom: i(`-${size}`) },
                [`.${b}m-l-\\!${name},.${b}m-x-\\!${name}`]: { marginLeft: i(`-${size}`) },
                [`.${b}m-r-\\!${name},.${b}m-x-\\!${name}`]: { marginRight: i(`-${size}`) },
                [`.${b}m-t-\\!${name},.${b}m-y-\\!${name}`]: { marginTop: i(`-${size}`) },
            }, {});
        return {
            [`.${b}m-auto`]: { margin: i('auto') },
            [`.${b}m-b-auto,.${b}m-y-auto`]: { marginBottom: i('auto') },
            [`.${b}m-l-auto,.${b}m-x-auto`]: { marginLeft: i('auto') },
            [`.${b}m-r-auto,.${b}m-x-auto`]: { marginRight: i('auto') },
            [`.${b}m-t-auto,.${b}m-y-auto`]: { marginTop: i('auto') },
            ..._1('margin'),
            ..._1('padding'),
            ..._2,
        };
    });
}
console.log((0, toString_1.default)(spacing()));
