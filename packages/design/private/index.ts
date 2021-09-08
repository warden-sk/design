/*
 * Copyright 2021 Marek Kobida
 */

import forBreakpoints, { CSS } from './forBreakpoints';
import sizes from './sizes';
import toString from './toString';

function spacing(): CSS {
  const columns = 12;

  return forBreakpoints(b => {
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
        (...[_, , i]) => ({
          ..._,
          [`.${b}m-l-${i + 1}\\/${columns}`]: { marginLeft: `${((i + 1) / columns) * 100}% !important` },
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

  return forBreakpoints(b => ({
    [`.${b}width-0`]: { width: '0 !important' },
    // .width-1/12
    ...[...Array(columns - 1)].reduce(
      (...[_, , i]) => ({
        ..._,
        [`.${b}width-${i + 1}\\/${columns}`]: { width: `${((i + 1) / columns) * 100}% !important` },
      }),
      {}
    ),
    [`.${b}width-100`]: { width: '100% !important' },
    [`.${b}width-auto`]: { width: 'auto !important' },
  }));
}

console.log(toString({ ...spacing(), ...width() }));
