/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';

function width(columns: number): EnhancedCSS {
  const $ = allowedJSXAttributes['width'];

  return forBreakpoints(([b]) => ({
    // .width-0
    [`.${b}${$}0`]: { width: '0' },
    // .width-1/12
    ...[...Array(columns - 1)].reduce(
      (_, __, i) => ({
        ..._,
        [`.${b}${$}${i + 1}\\/${columns}`]: {
          width: percentage(i + 1, columns),
        },
      }),
      {}
    ),
    // .width-100
    [`.${b}${$}100`]: {
      width: '100%',
    },
    // .width-auto
    [`.${b}${$}auto`]: {
      width: 'auto',
    },
  }));
}

export default width;
