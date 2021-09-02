/*
 * Copyright 2021 Marek Kobida
 */

import forBreakpoints, { CSS } from './forBreakpoints';
import sizes from './sizes';

function spacing(): CSS {
  const columns = 12;

  return forBreakpoints(breakpoint => {
    function auto(): CSS {
      return {
        [`.${breakpoint.name}m-auto`]: { margin: 'auto !important' },
        [`.${breakpoint.name}m-b-auto, .${breakpoint.name}m-y-auto`]: {
          marginBottom: 'auto !important',
        },
        [`.${breakpoint.name}m-l-auto, .${breakpoint.name}m-x-auto`]: {
          marginLeft: 'auto !important',
        },
        [`.${breakpoint.name}m-r-auto, .${breakpoint.name}m-x-auto`]: {
          marginRight: 'auto !important',
        },
        [`.${breakpoint.name}m-t-auto, .${breakpoint.name}m-y-auto`]: {
          marginTop: 'auto !important',
        },
      };
    }

    function test(property: string): CSS {
      return sizes.reduce(($, { name, size }) => {
        return {
          ...$,
          [`.${breakpoint.name}${property[0]}-${name}`]: {
            [property]: `${size} !important`,
          },
          [`.${breakpoint.name}${property[0]}-b-${name}, .${breakpoint.name}${property[0]}-y-${name}`]: {
            [`${property}-bottom`]: `${size} !important`,
          },
          [`.${breakpoint.name}${property[0]}-l-${name}, .${breakpoint.name}${property[0]}-x-${name}`]: {
            [`${property}-left`]: `${size} !important`,
          },
          [`.${breakpoint.name}${property[0]}-r-${name}, .${breakpoint.name}${property[0]}-x-${name}`]: {
            [`${property}-right`]: `${size} !important`,
          },
          [`.${breakpoint.name}${property[0]}-t-${name}, .${breakpoint.name}${property[0]}-y-${name}`]: {
            [`${property}-top`]: `${size} !important`,
          },
        };
      }, {});
    }

    return {
      ...auto(),
      ...test('margin'),
      ...test('padding'),
      ...sizes.reduce(($, { name, size }) => {
        return size === '0'
          ? $
          : {
              ...$,
              [`.${breakpoint.name}m-\\!${name}`]: {
                margin: `calc(${size} * -1) !important`,
              },
              [`.${breakpoint.name}m-b-\\!${name}, .${breakpoint.name}m-y-\\!${name}`]: {
                marginBottom: `calc(${size} * -1) !important`,
              },
              [`.${breakpoint.name}m-l-\\!${name}, .${breakpoint.name}m-x-\\!${name}`]: {
                marginLeft: `calc(${size} * -1) !important`,
              },
              [`.${breakpoint.name}m-r-\\!${name}, .${breakpoint.name}m-x-\\!${name}`]: {
                marginRight: `calc(${size} * -1) !important`,
              },
              [`.${breakpoint.name}m-t-\\!${name}, .${breakpoint.name}m-y-\\!${name}`]: {
                marginTop: `calc(${size} * -1) !important`,
              },
            };
      }, {}),
      ...[...new Array(columns - 1).keys()].reduce(($, i) => {
        return {
          ...$,
          [`.${breakpoint.name}m-l-${i + 1}\\/${columns}`]: {
            marginLeft: `${((i + 1) / columns) * 100}% !important`,
          },
        };
      }, {}),
    };
  });
}

console.log(spacing());
