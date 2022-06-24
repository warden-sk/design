/*
 * Copyright 2022 Marek Kobida
 */

import type { CSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';

function flexBasis(): CSS {
  const columns = 12;

  const $ = allowedJSXAttributes['flexBasis'];

  return forBreakpoints(([breakpoint]) => ({
    // .flex-basis-0
    [`.${breakpoint}${$}0`]: { flexBasis: '0 !important' },
    // .flex-basis-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${breakpoint}${$}${i + 1}\\/${columns}`]: { flexBasis: `${percentage(i + 1, columns)} !important` },
      }),
      {}
    ),
    // .flex-basis-100
    [`.${breakpoint}${$}100`]: { flexBasis: '100% !important' },
    // .flex-basis-auto
    [`.${breakpoint}${$}auto`]: { flexBasis: 'auto !important' },
  }));
}

export default flexBasis;
