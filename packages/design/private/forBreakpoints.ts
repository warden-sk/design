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

function forBreakpoints(_1: (breakpointName: '' | typeof breakpoints[number][0]) => CSS): CSS {
  return breakpoints.reduce((_2, [name, size]) => ({ ..._2, [`@media(min-width:${size})`]: _1(name) }), _1(''));
}

export default forBreakpoints;
