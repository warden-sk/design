/*
 * Copyright 2021 Marek Kobida
 */

import * as t from '../../babel-plugin/private/types';
import forBreakpoints, { CSS } from './forBreakpoints';
import allowedJSXAttributes from '../../babel-plugin/private/allowedJSXAttributes';
import m from './m';
import sizes from './sizes';
import toString from './toString';

function percentage(l: number, r: number): string {
  return `${((l / r) * 100).toFixed(2).replace(/\.0+$/, '')}%`;
}

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

function container(): CSS {
  return forBreakpoints(b =>
    b[0] ? { '.container': { maxWidth: `${b[1]} !important` } } : { '.container': { width: '100% !important' } }
  );
}

function spacing(): CSS {
  const columns = 12;

  return forBreakpoints(([b]) => {
    function css(l: string, p: 'margin' | 'padding', r: '0' | 'auto' | `${string}rem`): CSS {
      return {
        [`.${b}${p[0]}-${l}`]: { [p]: `${r} !important` },
        // "b", "y"
        [`.${b}${p[0]}-b-${l},.${b}${p[0]}-y-${l}`]: { [`${p}Bottom`]: `${r} !important` },
        // "l", "x"
        [`.${b}${p[0]}-l-${l},.${b}${p[0]}-x-${l}`]: { [`${p}Left`]: `${r} !important` },
        // "r", "x"
        [`.${b}${p[0]}-r-${l},.${b}${p[0]}-x-${l}`]: { [`${p}Right`]: `${r} !important` },
        // "t", "y"
        [`.${b}${p[0]}-t-${l},.${b}${p[0]}-y-${l}`]: { [`${p}Top`]: `${r} !important` },
      };
    }

    return {
      // .m-!1
      ...sizes.reduce((_, [l, r]) => (r === '0' ? _ : { ..._, ...css(`\\!${l}`, 'margin', `-${r}`) }), {}),
      // .m-0
      ...sizes.reduce((_, [l, r]) => ({ ..._, ...css(l, 'margin', r) }), {}),
      // .m-auto
      ...css('auto', 'margin', 'auto'),
      // .m-l-1/12
      ...[...Array(columns - 1)].reduce(
        (_, __, i) => ({
          ..._,
          [`.${b}m-l-${i + 1}\\/${columns}`]: { marginLeft: `${percentage(i + 1, columns)} !important` },
        }),
        {}
      ),
      // .p-0
      ...sizes.reduce((_, [l, r]) => ({ ..._, ...css(l, 'padding', r) }), {}),
    };
  });
}

function width(): CSS {
  const columns = 12;

  return forBreakpoints(([b]) => ({
    // .width-0
    [`.${b}width-0`]: { width: '0 !important' },
    // .width-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${b}width-${i + 1}\\/${columns}`]: { width: `${percentage(i + 1, columns)} !important` },
      }),
      {}
    ),
    // .width-100
    [`.${b}width-100`]: { width: '100% !important' },
    // .width-auto
    [`.${b}width-auto`]: { width: 'auto !important' },
  }));
}

const css: CSS = m(
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
  width()
);

console.log(toString(css));
