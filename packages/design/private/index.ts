/*
 * Copyright 2023 Marek Kobida
 */

import * as t from './storage';
import type { EnhancedCSSProperties } from './forBreakpoints';
import forBreakpoints from './forBreakpoints';
import container from './components/container';
import flexBasis from './components/flexBasis';
import fontSize from './components/fontSize';
import height from './components/height';
import lineHeight from './components/lineHeight';
import spacing from './components/spacing';
import toString from './toString';
import width from './components/width';
import opacity from './components/opacity';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';
import border from './components/border';
import borderRadius from './components/borderRadius';

function toHelper(propertyName: string, type: readonly string[]): EnhancedCSSProperties {
  const $ = dictionary.getKey(propertyName);

  return forBreakpoints(([breakpointName]) =>
    type.reduce(
      (_, property) => ({
        ..._,
        [`.${breakpointName}${$}${dictionary.getKey(property)}`]: {
          [propertyName]: property,
        },
      }),
      {}
    )
  );
}

const alignContent = toHelper('alignContent', t.AlignContent);
const alignItems = toHelper('alignItems', t.AlignItems);
const alignSelf = toHelper('alignSelf', t.AlignSelf);
const cursor = toHelper('cursor', t.Cursor);
const display = toHelper('display', t.Display);
const flex = toHelper('flex', t.Flex);
const flexDirection = toHelper('flexDirection', t.FlexDirection);
const flexWrap = toHelper('flexWrap', t.FlexWrap);
const fontWeight = toHelper('fontWeight', t.FontWeight);
const justifyContent = toHelper('justifyContent', t.JustifyContent);
const justifyItems = toHelper('justifyItems', t.JustifyItems);
const justifySelf = toHelper('justifySelf', t.JustifySelf);
const textAlign = toHelper('textAlign', t.TextAlign);
const whiteSpace = toHelper('whiteSpace', t.WhiteSpace);

const root: EnhancedCSSProperties = {
  '*,*::before,*::after': {
    boxSizing: 'border-box',
  },
  ':root': {
    // @ts-ignore
    '--border-width': '0.0625rem !important' /* 1px */,
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
    margin: '0',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  'h1,h2,h3,h4,h5,h6,p': {
    margin: '0',
  },
  html: {
    WebkitTextSizeAdjust: '100%',
    fontSize: '16px',
    lineHeight: '1.5',
  },
};

const css: EnhancedCSSProperties[] = [
  alignContent,
  alignItems,
  alignSelf,
  border(),
  borderRadius(),
  container(),
  cursor,
  display,
  flex,
  flexBasis(12),
  flexDirection,
  flexWrap,
  fontSize(),
  fontWeight,
  height(),
  justifyContent,
  justifyItems,
  justifySelf,
  lineHeight(),
  opacity(),
  spacing(12),
  textAlign,
  whiteSpace,
  width(12),
];

export default () => toString(root) + css.reduce((left, right) => left + toString(right, true), '');
