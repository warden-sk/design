/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';

function flexBasis(columns: number): EnhancedCSS {
  const $ = allowedJSXAttributes['flexBasis'];

  return forBreakpoints(([breakpoint]) => ({
    // .flex-basis-0
    [`.${breakpoint}${$}0`]: {
      flexBasis: '0',
    },
    // .flex-basis-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${breakpoint}${$}${i + 1}\\/${columns}`]: {
          flexBasis: percentage(i + 1, columns),
        },
      }),
      {}
    ),
    // .flex-basis-100
    [`.${breakpoint}${$}100`]: {
      flexBasis: '100%',
    },
    // .flex-basis-auto
    [`.${breakpoint}${$}auto`]: {
      flexBasis: 'auto',
    },
  }));
}

export default flexBasis;
