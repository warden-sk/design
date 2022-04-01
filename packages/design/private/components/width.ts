/*
 * Copyright 2022 Marek Kobida
 */

import forBreakpoints, { CSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import percentage from '../percentage';

function width(): CSS {
  const columns = 12;

  const w = allowedJSXAttributes['width'];

  return forBreakpoints(([b]) => ({
    // .width-0
    [`.${b}${w}0`]: { width: '0 !important' },
    // .width-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${b}${w}${i + 1}\\/${columns}`]: { width: `${percentage(i + 1, columns)} !important` },
      }),
      {}
    ),
    // .width-100
    [`.${b}${w}100`]: { width: '100% !important' },
    // .width-auto
    [`.${b}${w}auto`]: { width: 'auto !important' },
  }));
}

export default width;
