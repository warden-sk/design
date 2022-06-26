/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
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
      ...[...new Array(columns - 1)].reduce(
        (_, __, i) => ({
          ..._,
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
