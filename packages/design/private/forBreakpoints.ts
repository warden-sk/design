/*
 * Copyright 2022 Marek Kobida
 */

import type React from 'react';
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
export interface CSS {
  [_: string]: CSS | React.CSSProperties;
}

function forBreakpoints(on: (breakpoint: readonly [string, string]) => CSS): CSS {
  return breakpoints.reduce(
    (_, breakpoint) => ({ ..._, [`@media(min-width:${breakpoint[1]})`]: on(breakpoint) }),
    on(['', ''])
  );
}

export default forBreakpoints;
