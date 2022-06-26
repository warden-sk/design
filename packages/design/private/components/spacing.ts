/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSS } from '../forBreakpoints';
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

function spacing(columns: number): EnhancedCSS {
  return forBreakpoints(([breakpoint]) => {
    function css(l: string, p: 'margin' | 'padding', r: '0' | 'auto' | `${string}rem`): EnhancedCSS {
      return {
        [`.${breakpoint}${p[0]}-${l}`]: { [p]: r },
        // "b", "y"
        [`.${breakpoint}${p[0]}-b-${l},.${breakpoint}${p[0]}-y-${l}`]: { [`${p}Bottom`]: r },
        // "l", "x"
        [`.${breakpoint}${p[0]}-l-${l},.${breakpoint}${p[0]}-x-${l}`]: { [`${p}Left`]: r },
        // "r", "x"
        [`.${breakpoint}${p[0]}-r-${l},.${breakpoint}${p[0]}-x-${l}`]: { [`${p}Right`]: r },
        // "t", "y"
        [`.${breakpoint}${p[0]}-t-${l},.${breakpoint}${p[0]}-y-${l}`]: { [`${p}Top`]: r },
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
          [`.${breakpoint}m-l-${i + 1}\\/${columns}`]: { marginLeft: percentage(i + 1, columns) },
        }),
        {}
      ),
      // .p-0
      ...sizes.reduce((_, [l, r]) => ({ ..._, ...css(l, 'padding', r) }), {}),
    };
  });
}

export default spacing;
