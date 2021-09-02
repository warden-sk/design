/*
 * Copyright 2021 Marek Kobida
 */

import breakpoints, { Breakpoint } from './breakpoints';
import React from 'react';

// {
//   '.test': {
//     margin: 0,
//   },
//   '@media (min-width: 0)': {
//     '.test': {
//       margin: 0,
//     },
//   },
// }
export interface CSS {
  [_1: string]: React.CSSProperties | { [_2: string]: React.CSSProperties };
}

function forBreakpoints(_1: (breakpoint: Breakpoint) => CSS): CSS {
  return breakpoints.reduce(
    (_2, breakpoint) => ({ ..._2, [`@media (min-width: ${breakpoint.size})`]: _1(breakpoint) }),
    _1({ name: '', size: '' })
  );
}

export default forBreakpoints;
