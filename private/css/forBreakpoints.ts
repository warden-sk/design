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
  [_1: string]: React.CSSProperties | { [_2: string]: React.CSSProperties };
}

function forBreakpoints(_1: (breakpoint?: typeof breakpoints[number]) => CSS): CSS {
  return breakpoints.reduce(
    (_2, breakpoint) => ({ ..._2, [`@media (min-width: ${breakpoint.size})`]: _1(breakpoint) }),
    _1()
  );
}

export default forBreakpoints;
