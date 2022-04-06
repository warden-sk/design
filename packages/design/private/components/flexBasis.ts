/*
 * Copyright 2022 Marek Kobida
 */

import forBreakpoints, { CSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import percentage from '../percentage';

function flexBasis(): CSS {
  const columns = 12;

  const $ = allowedJSXAttributes['flexBasis'];

  return forBreakpoints(([b]) => ({
    // .flex-basis-0
    [`.${b}${$}0`]: { flexBasis: '0 !important' },
    // .flex-basis-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${b}${$}${i + 1}\\/${columns}`]: { flexBasis: `${percentage(i + 1, columns)} !important` },
      }),
      {}
    ),
    // .flex-basis-100
    [`.${b}${$}100`]: { flexBasis: '100% !important' },
    // .flex-basis-auto
    [`.${b}${$}auto`]: { flexBasis: 'auto !important' },
  }));
}

export default flexBasis;
