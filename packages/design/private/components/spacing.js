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
    return (0, forBreakpoints_1.default)(([breakpointName]) => {
        function css(left, property, right) {
            return {
                [`.${breakpointName}${property[0]}-${left}`]: {
                    [property]: right,
                },
                // "b", "y"
                [`.${breakpointName}${property[0]}-b-${left},.${breakpointName}${property[0]}-y-${left}`]: {
                    [`${property}Bottom`]: right,
                },
                // "l", "x"
                [`.${breakpointName}${property[0]}-l-${left},.${breakpointName}${property[0]}-x-${left}`]: {
                    [`${property}Left`]: right,
                },
                // "right", "x"
                [`.${breakpointName}${property[0]}-r-${left},.${breakpointName}${property[0]}-x-${left}`]: {
                    [`${property}Right`]: right,
                },
                // "t", "y"
                [`.${breakpointName}${property[0]}-t-${left},.${breakpointName}${property[0]}-y-${left}`]: {
                    [`${property}Top`]: right,
                },
            };
        }
        return {
            // .m-!1
            ...sizes.reduce((_, [left, right]) => right === '0'
                ? _
                : {
                    ..._,
                    ...css(`\\!${left}`, 'margin', `-${right}`),
                }, {}),
            // .m-0
            ...sizes.reduce((_, [left, right]) => ({
                ..._,
                ...css(left, 'margin', right),
            }), {}),
            // .m-auto
            ...css('auto', 'margin', 'auto'),
            // .m-l-1/12
            ...[...new Array(columns - 1)].reduce((_, __, i) => ({
                ..._,
                [`.${breakpointName}m-l-${i + 1}\\/${columns}`]: {
                    marginLeft: (0, percentage_1.default)(i + 1, columns),
                },
            }), {}),
            // .p-0
            ...sizes.reduce((_, [left, right]) => ({
                ..._,
                ...css(left, 'padding', right),
            }), {}),
        };
    });
}
exports.default = spacing;
