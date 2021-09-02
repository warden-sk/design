/*
 * Copyright 2021 Marek Kobida
 */

import forBreakpoints, { CSS } from './forBreakpoints';
import sizes from './sizes';
import toString from './toString';

function spacing(): CSS {
  return forBreakpoints(breakpoint => {
    const b: string = breakpoint?.name ?? '';

    function auto(): CSS {
      return {
        [`.${b}m-auto`]: { margin: 'auto !important' },
        [`.${b}m-b-auto, .${b}m-y-auto`]: { marginBottom: 'auto !important' },
        [`.${b}m-l-auto, .${b}m-x-auto`]: { marginLeft: 'auto !important' },
        [`.${b}m-r-auto, .${b}m-x-auto`]: { marginRight: 'auto !important' },
        [`.${b}m-t-auto, .${b}m-y-auto`]: { marginTop: 'auto !important' },
      };
    }

    function _1(p: 'margin' | 'padding'): CSS {
      return sizes.reduce(
        (_, { name, size }) => ({
          ..._,
          [`.${b}${p[0]}-${name}`]: { [p]: `${size} !important` },
          [`.${b}${p[0]}-b-${name}, .${b}${p[0]}-y-${name}`]: { [`${p}Bottom`]: `${size} !important` },
          [`.${b}${p[0]}-l-${name}, .${b}${p[0]}-x-${name}`]: { [`${p}Left`]: `${size} !important` },
          [`.${b}${p[0]}-r-${name}, .${b}${p[0]}-x-${name}`]: { [`${p}Right`]: `${size} !important` },
          [`.${b}${p[0]}-t-${name}, .${b}${p[0]}-y-${name}`]: { [`${p}Top`]: `${size} !important` },
        }),
        {}
      );
    }

    const _2: CSS = sizes.reduce(
      (_, { name, size }) =>
        size === '0'
          ? _
          : {
              ..._,
              [`.${b}m-\\!${name}`]: { margin: `-${size} !important` },
              [`.${b}m-b-\\!${name}, .${b}m-y-\\!${name}`]: { marginBottom: `-${size} !important` },
              [`.${b}m-l-\\!${name}, .${b}m-x-\\!${name}`]: { marginLeft: `-${size} !important` },
              [`.${b}m-r-\\!${name}, .${b}m-x-\\!${name}`]: { marginRight: `-${size} !important` },
              [`.${b}m-t-\\!${name}, .${b}m-y-\\!${name}`]: { marginTop: `-${size} !important` },
            },
      {}
    );

    return {
      ...auto(),
      ..._1('margin'),
      ..._1('padding'),
      ..._2,
    };
  });
}

console.log(toString(spacing()));
