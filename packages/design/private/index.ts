/*
 * Copyright 2021 Marek Kobida
 */

import * as t from '../../babel-plugin/private/types';
import forBreakpoints, { CSS } from './forBreakpoints';
import allowedJSXAttributes from '../../babel-plugin/private/allowedJSXAttributes';
import container from './components/container';
import spacing from './components/spacing';
import toString from './toString';
import width from './components/width';

function toHelper(propertyName: keyof typeof allowedJSXAttributes, type: readonly string[]): CSS {
  return forBreakpoints(([b]) =>
    type.reduce(
      (_, property) => ({
        ..._,
        [`.${b}${allowedJSXAttributes[propertyName]}-${property}`]: { [propertyName]: `${property} !important` },
      }),
      {}
    )
  );
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

const css: CSS[] = [
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
  container(),
  display,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  spacing(),
  width(),
];

console.log(css.reduce((_, __) => _ + toString(__), ''));
