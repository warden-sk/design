/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
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
  [_1: string]: CSS | React.CSSProperties;
}

function forBreakpoints(_1: (breakpoint: readonly [string, string]) => CSS): CSS {
  return breakpoints.reduce(
    (_2, breakpoint) => ({ ..._2, [`@media(min-width:${breakpoint[1]})`]: _1(breakpoint) }),
    _1(['', ''])
  );
}

export default forBreakpoints;
