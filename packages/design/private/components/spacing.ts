/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import createArray from '../createArray';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';

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

function spacing(columns: number): EnhancedCSSProperties {
  return forBreakpoints(([breakpointName]) => {
    function css(
      left: string,
      property: 'margin' | 'padding',
      right: '0' | 'auto' | `${string}rem`
    ): EnhancedCSSProperties {
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
      ...['1', '2', '3', '4'].reduce(
        (_, left) => ({
          ..._,
          [`.${breakpointName}grid-template-columns-${left}`]: {
            gridTemplateColumns: `repeat(${left}, minmax(0, 1fr))`,
          },
        }),
        {}
      ),
      // .gap-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}gap-${left}`]: {
            gap: right,
          },
          [`.${breakpointName}gap-x-${left}`]: {
            columnGap: right,
          },
          [`.${breakpointName}gap-y-${left}`]: {
            rowGap: right,
          },
        }),
        {}
      ),
      // .space-x-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}space-x-${left} > * + *`]: {
            marginLeft: right,
          },
          [`.${breakpointName}space-y-${left} > * + *`]: {
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
                ...css(`\\!${left}`, 'margin', `-${right}`),
              },
        {}
      ),
      // .m-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(left, 'margin', right),
        }),
        {}
      ),
      // .m-auto
      ...css('auto', 'margin', 'auto'),
      // .m-l-1/12
      ...createArray(columns - 1).reduce(
        (css, i) => ({
          ...css,
          [`.${breakpointName}m-l-${i + 1}\\/${columns}`]: {
            marginLeft: percentage(i + 1, columns),
          },
        }),
        {}
      ),
      // .p-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(left, 'padding', right),
        }),
        {}
      ),
    };
  });
}

export default spacing;
