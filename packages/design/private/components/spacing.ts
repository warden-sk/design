/*
 * Copyright 2022 Marek Kobida
 */

import type { CSS } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';
import sizes from '../sizes';

function spacing(): CSS {
  const columns = 12;

  return forBreakpoints(([breakpoint]) => {
    function css(l: string, p: 'margin' | 'padding', r: '0' | 'auto' | `${string}rem`): CSS {
      return {
        [`.${breakpoint}${p[0]}-${l}`]: { [p]: `${r} !important` },
        // "b", "y"
        [`.${breakpoint}${p[0]}-b-${l},.${breakpoint}${p[0]}-y-${l}`]: { [`${p}Bottom`]: `${r} !important` },
        // "l", "x"
        [`.${breakpoint}${p[0]}-l-${l},.${breakpoint}${p[0]}-x-${l}`]: { [`${p}Left`]: `${r} !important` },
        // "r", "x"
        [`.${breakpoint}${p[0]}-r-${l},.${breakpoint}${p[0]}-x-${l}`]: { [`${p}Right`]: `${r} !important` },
        // "t", "y"
        [`.${breakpoint}${p[0]}-t-${l},.${breakpoint}${p[0]}-y-${l}`]: { [`${p}Top`]: `${r} !important` },
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
          [`.${breakpoint}m-l-${i + 1}\\/${columns}`]: { marginLeft: `${percentage(i + 1, columns)} !important` },
        }),
        {}
      ),
      // .p-0
      ...sizes.reduce((_, [l, r]) => ({ ..._, ...css(l, 'padding', r) }), {}),
    };
  });
}

export default spacing;
