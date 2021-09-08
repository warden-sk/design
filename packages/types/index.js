"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
// https://drafts.csswg.org/css-align/#typedef-content-distribution
const ContentDistribution = ['space-around', 'space-between', 'space-evenly', 'stretch'];
// https://drafts.csswg.org/css-align/#typedef-content-position
const ContentPosition = ['center', 'end', 'flex-end', 'flex-start', 'start'];
// https://drafts.csswg.org/css-align/#typedef-self-position
const SelfPosition = ['center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start'];
// https://drafts.csswg.org/css-align/#propdef-align-content
const AlignContent = ['baseline', ...ContentDistribution, ...ContentPosition];
// https://drafts.csswg.org/css-align/#propdef-align-items
const AlignItems = ['baseline', 'stretch', ...SelfPosition];
// https://drafts.csswg.org/css-align/#propdef-align-self
const AlignSelf = ['auto', 'baseline', 'stretch', ...SelfPosition];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex
const Flex = ['1', 'none'];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction
const FlexDirection = ['column', 'column-reverse', 'row', 'row-reverse'];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap
const FlexWrap = ['nowrap', 'wrap', 'wrap-reverse'];
// https://drafts.csswg.org/css-align/#propdef-justify-content
const JustifyContent = ['left', 'right', ...ContentDistribution, ...ContentPosition];
// https://drafts.csswg.org/css-align/#propdef-justify-items
const JustifyItems = ['baseline', 'stretch', ...SelfPosition];
// https://drafts.csswg.org/css-align/#propdef-justify-self
const JustifySelf = ['auto', 'baseline', 'stretch', ...SelfPosition];
const MarginLeft = ['1/12', '10/12', '11/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', ...S];
const S = ['!1', '!2', '!3', '!4', '!5', '!6', '!7', '!8', '0', '1', '2', '3', '4', '5', '6', '7', '8', 'auto'];
const Width = [
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
