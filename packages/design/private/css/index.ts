/*
 * Copyright 2021 Marek Kobida
 */

import forBreakpoints, { CSS } from './forBreakpoints';
import sizes from './sizes';
import toString from './toString';

function spacing(): CSS {
  const i = (_: string): string => `${_} !important`;

  return forBreakpoints(b => {
    function _1(p: 'margin' | 'padding'): CSS {
      return sizes.reduce(
        (_, { name, size }) => ({
          ..._,
          [`.${b}${p[0]}-${name}`]: { [p]: i(size) },
          [`.${b}${p[0]}-b-${name},.${b}${p[0]}-y-${name}`]: { [`${p}Bottom`]: i(size) },
          [`.${b}${p[0]}-l-${name},.${b}${p[0]}-x-${name}`]: { [`${p}Left`]: i(size) },
          [`.${b}${p[0]}-r-${name},.${b}${p[0]}-x-${name}`]: { [`${p}Right`]: i(size) },
          [`.${b}${p[0]}-t-${name},.${b}${p[0]}-y-${name}`]: { [`${p}Top`]: i(size) },
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
              [`.${b}m-\\!${name}`]: { margin: i(`-${size}`) },
              [`.${b}m-b-\\!${name},.${b}m-y-\\!${name}`]: { marginBottom: i(`-${size}`) },
              [`.${b}m-l-\\!${name},.${b}m-x-\\!${name}`]: { marginLeft: i(`-${size}`) },
              [`.${b}m-r-\\!${name},.${b}m-x-\\!${name}`]: { marginRight: i(`-${size}`) },
              [`.${b}m-t-\\!${name},.${b}m-y-\\!${name}`]: { marginTop: i(`-${size}`) },
            },
      {}
    );

    return {
      [`.${b}m-auto`]: { margin: i('auto') },
      [`.${b}m-b-auto,.${b}m-y-auto`]: { marginBottom: i('auto') },
      [`.${b}m-l-auto,.${b}m-x-auto`]: { marginLeft: i('auto') },
      [`.${b}m-r-auto,.${b}m-x-auto`]: { marginRight: i('auto') },
      [`.${b}m-t-auto,.${b}m-y-auto`]: { marginTop: i('auto') },
      ..._1('margin'),
      ..._1('padding'),
      ..._2,
    };
  });
}

console.log(toString(spacing()));
