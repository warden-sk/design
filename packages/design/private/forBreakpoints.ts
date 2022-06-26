/*
 * Copyright 2022 Marek Kobida
 */

import type * as CSS from 'csstype';

const breakpoints = [
  ['\\#', '40rem'], //       640px
  ['\\#\\#', '48rem'], //    768px
  ['\\#\\#\\#', '64rem'], // 1024px
] as const;

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
  [key: string]: CSS.Properties | EnhancedCSS;
}

function forBreakpoints(on: (breakpoint: readonly [string, string]) => EnhancedCSS): EnhancedCSS {
  return breakpoints.reduce(
    (_, breakpoint) => ({
      ..._,
      [`@media(min-width:${breakpoint[1]})`]: on(breakpoint),
    }),
    on(['', ''])
  );
}

export default forBreakpoints;
