/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import createArrayOf from '../createArrayOf';
import percentage from '../percentage';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';

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
      const m = allowedJSXAttributes[property[0]];
      const mB = allowedJSXAttributes[`${property[0]}B`];
      const mL = allowedJSXAttributes[`${property[0]}L`];
      const mR = allowedJSXAttributes[`${property[0]}R`];
      const mT = allowedJSXAttributes[`${property[0]}T`];
      const mX = allowedJSXAttributes[`${property[0]}X`];
      const mY = allowedJSXAttributes[`${property[0]}Y`];

      return {
        [`.${breakpointName}${m}${left}`]: {
          [property]: right,
        },
        // "b", "y"
        [`.${breakpointName}${mB}${left},.${breakpointName}${mY}${left}`]: {
          [`${property}Bottom`]: right,
        },
        // "l", "x"
        [`.${breakpointName}${mL}${left},.${breakpointName}${mX}${left}`]: {
          [`${property}Left`]: right,
        },
        // "r", "x"
        [`.${breakpointName}${mR}${left},.${breakpointName}${mX}${left}`]: {
          [`${property}Right`]: right,
        },
        // "t", "y"
        [`.${breakpointName}${mT}${left},.${breakpointName}${mY}${left}`]: {
          [`${property}Top`]: right,
        },
      };
    }

    return {
      ...['1', '2', '3', '4'].reduce(
        (_, left) => ({
          ..._,
          [`.${breakpointName}${allowedJSXAttributes['gridTemplateColumns']}${left}`]: {
            gridTemplateColumns: `repeat(${left}, minmax(0, 1fr))`,
          },
        }),
        {}
      ),
      // .gap-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}${allowedJSXAttributes['gap']}${left}`]: {
            gap: right,
          },
          [`.${breakpointName}${allowedJSXAttributes['gapX']}${left}`]: {
            columnGap: right,
          },
          [`.${breakpointName}${allowedJSXAttributes['gapY']}${left}`]: {
            rowGap: right,
          },
        }),
        {}
      ),
      // .space-x-0
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}${allowedJSXAttributes['spaceX']}${left} > * + *`]: {
            marginLeft: right,
          },
          [`.${breakpointName}${allowedJSXAttributes['spaceY']}${left} > * + *`]: {
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
      ...createArrayOf(columns).reduce(
        (css, i) => ({
          ...css,
          [`.${breakpointName}${allowedJSXAttributes['mL']}${i + 1}\\/${columns}`]: {
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
