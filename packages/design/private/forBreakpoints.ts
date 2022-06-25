/*
 * Copyright 2022 Marek Kobida
 */

import type * as CSS from 'csstype';
import breakpoints from './breakpoints';

// {
//   'body': {
//     margin: 0,
//   },
//   '@media print': {
//     'body': {
//       margin: 0,
//     },
//   },
// }
export interface EnhancedCSS {
  [_: string]: CSS.Properties | EnhancedCSS;
}

function forBreakpoints(on: (breakpoint: readonly [string, string]) => EnhancedCSS): EnhancedCSS {
  return breakpoints.reduce(
    (_, breakpoint) => ({ ..._, [`@media(min-width:${breakpoint[1]})`]: on(breakpoint) }),
    on(['', ''])
  );
}

export default forBreakpoints;
