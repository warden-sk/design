"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Width = exports.MarginLeft = exports.S = exports.JustifySelf = exports.JustifyItems = exports.JustifyContent = exports.FlexWrap = exports.FlexDirection = exports.Flex = exports.AlignSelf = exports.AlignItems = exports.AlignContent = exports.SelfPosition = exports.ContentPosition = exports.ContentDistribution = void 0;
require("react");
// https://drafts.csswg.org/css-align/#typedef-content-distribution
exports.ContentDistribution = ['space-around', 'space-between', 'space-evenly', 'stretch'];
// https://drafts.csswg.org/css-align/#typedef-content-position
exports.ContentPosition = ['center', 'end', 'flex-end', 'flex-start', 'start'];
// https://drafts.csswg.org/css-align/#typedef-self-position
exports.SelfPosition = ['center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start'];
// https://drafts.csswg.org/css-align/#propdef-align-content
exports.AlignContent = ['baseline', ...exports.ContentDistribution, ...exports.ContentPosition];
// https://drafts.csswg.org/css-align/#propdef-align-items
exports.AlignItems = ['baseline', 'stretch', ...exports.SelfPosition];
// https://drafts.csswg.org/css-align/#propdef-align-self
exports.AlignSelf = ['auto', 'baseline', 'stretch', ...exports.SelfPosition];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex
exports.Flex = ['1', 'none'];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction
exports.FlexDirection = ['column', 'column-reverse', 'row', 'row-reverse'];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap
exports.FlexWrap = ['nowrap', 'wrap', 'wrap-reverse'];
// https://drafts.csswg.org/css-align/#propdef-justify-content
exports.JustifyContent = ['left', 'right', ...exports.ContentDistribution, ...exports.ContentPosition];
// https://drafts.csswg.org/css-align/#propdef-justify-items
exports.JustifyItems = ['baseline', 'stretch', ...exports.SelfPosition];
// https://drafts.csswg.org/css-align/#propdef-justify-self
exports.JustifySelf = ['auto', 'baseline', 'stretch', ...exports.SelfPosition];
exports.S = [
    '!1',
    '!2',
    '!3',
    '!4',
    '!5',
    '!6',
    '!7',
    '!8',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    'auto',
];
exports.MarginLeft = [
    '1/12',
    '10/12',
    '11/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    ...exports.S,
];
exports.Width = [
    '0',
    '1/12',
    '10/12',
    '100',
    '11/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    'auto',
];
