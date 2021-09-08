/*
 * Copyright 2021 Marek Kobida
 */

import 'react';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/helpers/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/helpers/decodeResponsiveClassName';

// https://drafts.csswg.org/css-align/#propdef-align-content
type AlignContent = ['baseline', ...ContentDistribution, ...ContentPosition];

// https://drafts.csswg.org/css-align/#propdef-align-items
type AlignItems = ['baseline', 'stretch', ...SelfPosition];

// https://drafts.csswg.org/css-align/#propdef-align-self
type AlignSelf = ['auto', 'baseline', 'stretch', ...SelfPosition];

// https://drafts.csswg.org/css-align/#typedef-content-distribution
type ContentDistribution = ['space-around', 'space-between', 'space-evenly', 'stretch'];

// https://drafts.csswg.org/css-align/#typedef-content-position
type ContentPosition = ['center', 'end', 'flex-end', 'flex-start', 'start'];

// https://drafts.csswg.org/css-flexbox-1/#propdef-flex
type Flex = ['1', 'none'];

// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction
type FlexDirection = ['column', 'column-reverse', 'row', 'row-reverse'];

// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap
type FlexWrap = ['nowrap', 'wrap', 'wrap-reverse'];

// https://drafts.csswg.org/css-align/#propdef-justify-content
type JustifyContent = ['left', 'right', ...ContentDistribution, ...ContentPosition];

// https://drafts.csswg.org/css-align/#propdef-justify-items
type JustifyItems = ['baseline', 'stretch', ...SelfPosition];

// https://drafts.csswg.org/css-align/#propdef-justify-self
type JustifySelf = ['auto', 'baseline', 'stretch', ...SelfPosition];

type MarginLeft = ['1/12', '10/12', '11/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', ...S];

type S = ['!1', '!2', '!3', '!4', '!5', '!6', '!7', '!8', '0', '1', '2', '3', '4', '5', '6', '7', '8', 'auto'];

// https://drafts.csswg.org/css-align/#typedef-self-position
type SelfPosition = ['center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start'];

type Width = [
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
  'auto'
];
