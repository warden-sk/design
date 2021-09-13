/*
 * Copyright 2021 Marek Kobida
 */

import forBreakpoints, { CSS } from '../forBreakpoints';
import percentage from '../percentage';

function width(): CSS {
  const columns = 12;

  return forBreakpoints(([b]) => ({
    // .width-0
    [`.${b}width-0`]: { width: '0 !important' },
    // .width-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${b}width-${i + 1}\\/${columns}`]: { width: `${percentage(i + 1, columns)} !important` },
      }),
      {}
    ),
    // .width-100
    [`.${b}width-100`]: { width: '100% !important' },
    // .width-auto
    [`.${b}width-auto`]: { width: 'auto !important' },
  }));
}

export default width;
