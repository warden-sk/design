/*
 * Copyright 2021 Marek Kobida
 */

// @ts-ignore
import * as t from '@types/warden-sk__design/types';
import forBreakpoints, { CSS } from './forBreakpoints';
import allowedJSXAttributes from '../../babel-plugin/private/allowedJSXAttributes';
import container from './components/container';
import fontSizes from './fontSizes';
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
const fontSize = forBreakpoints(([b]) =>
  fontSizes.reduce(
    (_, [l, r]) => ({ ..._, [`.${b}${allowedJSXAttributes['fontSize']}-${l}`]: { fontSize: `${r} !important` } }),
    {}
  )
);
const justifyContent = toHelper('justifyContent', t.JustifyContent);
const justifyItems = toHelper('justifyItems', t.JustifyItems);
const justifySelf = toHelper('justifySelf', t.JustifySelf);
const textAlign = toHelper('textAlign', t.TextAlign);

const css: CSS[] = [
  {
    '*,*::after,*::before': {
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
      lineHeight: 1.5,
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
  fontSize,
  justifyContent,
  justifyItems,
  justifySelf,
  spacing(),
  textAlign,
  width(),
];

console.log(css.reduce((l, r) => l + toString(r), ''));
