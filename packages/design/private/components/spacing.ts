/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import createArrayOf from '../createArrayOf';
import percentage from '../percentage';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

const sizes = [
  ['0', '0'], //       0
  ['1', '0.25rem'], // 4px
  ['2', '0.5rem'], //  8px
  ['3', '0.75rem'], // 12px
  ['4', '1rem'], //    16px
  ['5', '1.25rem'], // 20px
  ['6', '1.5rem'], //  24px
  ['7', '1.75rem'], // 28px
  ['8', '2rem'], //    32px
] as const;

function css(
  breakpointName: string,
  left: string,
  property: 'margin' | 'padding',
  right: '0' | 'auto' | `${string}rem`
): EnhancedCSSProperties {
  const $ = dictionary.get(property[0]);
  const b = dictionary.get(`${property[0]}B`);
  const l = dictionary.get(`${property[0]}L`);
  const r = dictionary.get(`${property[0]}R`);
  const t = dictionary.get(`${property[0]}T`);
  const x = dictionary.get(`${property[0]}X`);
  const y = dictionary.get(`${property[0]}Y`);

  return {
    [`.${breakpointName}${$}${dictionary.get(left)}`]: {
      [property]: right,
    },
    // "b", "y"
    [`.${breakpointName}${b}${dictionary.get(left)},.${breakpointName}${y}${dictionary.get(left)}`]: {
      [`${property}Bottom`]: right,
    },
    // "l", "x"
    [`.${breakpointName}${l}${dictionary.get(left)},.${breakpointName}${x}${dictionary.get(left)}`]: {
      [`${property}Left`]: right,
    },
    // "r", "x"
    [`.${breakpointName}${r}${dictionary.get(left)},.${breakpointName}${x}${dictionary.get(left)}`]: {
      [`${property}Right`]: right,
    },
    // "t", "y"
    [`.${breakpointName}${t}${dictionary.get(left)},.${breakpointName}${y}${dictionary.get(left)}`]: {
      [`${property}Top`]: right,
    },
  };
}

function spacing(columns: number): EnhancedCSSProperties {
  return forBreakpoints(([breakpointName]) => {
    return {
      ...['1', '2', '3', '4'].reduce(
        (_, left) => ({
          ..._,
          [`.${breakpointName}${dictionary.get('gridTemplateColumns')}${dictionary.get(left)}`]: {
            gridTemplateColumns: `repeat(${left}, minmax(0, 1fr))`,
          },
        }),
        {}
      ),
      // .gap-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}${dictionary.get('gap')}${dictionary.get(left)}`]: {
            gap: right,
          },
          [`.${breakpointName}${dictionary.get('gapX')}${dictionary.get(left)}`]: {
            columnGap: right,
          },
          [`.${breakpointName}${dictionary.get('gapY')}${dictionary.get(left)}`]: {
            rowGap: right,
          },
        }),
        {}
      ),
      // .space-x-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}${dictionary.get('spaceX')}${dictionary.get(left)} > * + *`]: {
            marginLeft: right,
          },
          [`.${breakpointName}${dictionary.get('spaceY')}${dictionary.get(left)} > * + *`]: {
            marginTop: right,
          },
        }),
        {}
      ),
      // .m-!1
      ...sizes.reduce(
        (_, [left, right]) =>
          right === '0'
            ? _
            : {
                ..._,
                ...css(breakpointName, `!${left}`, 'margin', `-${right}`),
              },
        {}
      ),
      // .m-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(breakpointName, left, 'margin', right),
        }),
        {}
      ),
      // .m-auto
      ...css(breakpointName, 'auto', 'margin', 'auto'),
      // .m-l-1/12
      ...createArrayOf(columns).reduce(
        (css, i) => ({
          ...css,
          [`.${breakpointName}${dictionary.get('mL')}${dictionary.get(`${i + 1}/${columns}`)}`]: {
            marginLeft: percentage(i + 1, columns),
          },
        }),
        {}
      ),
      // .p-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(breakpointName, left, 'padding', right),
        }),
        {}
      ),
    };
  });
}

export default spacing;
