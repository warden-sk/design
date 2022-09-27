/*
 * Copyright 2022 Marek Kobida
 */

import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import createArray from '../createArray';
import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';

function width(columns: number): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['width'];

  return forBreakpoints(([breakpointName]) => ({
    // .width-0
    [`.${breakpointName}${$}0`]: {
      width: '0',
    },
    // .width-1/12
    ...createArray(columns - 1).reduce(
      (css, i) => ({
        ...css,
        [`.${breakpointName}${$}${i + 1}\\/${columns}`]: {
          width: percentage(i + 1, columns),
        },
      }),
      {}
    ),
    // .width-100
    [`.${breakpointName}${$}100`]: {
      width: '100%',
    },
    // .width-auto
    [`.${breakpointName}${$}auto`]: {
      width: 'auto',
    },
  }));
}

export default width;
