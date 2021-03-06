/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import createArray from '../createArray';
import forBreakpoints from '../forBreakpoints';
import percentage from '../percentage';

function flexBasis(columns: number): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['flexBasis'];

  return forBreakpoints(([breakpointName]) => ({
    // .flex-basis-0
    [`.${breakpointName}${$}0`]: {
      flexBasis: '0',
    },
    // .flex-basis-1/12
    ...createArray(columns - 1).reduce(
      (css, i) => ({
        ...css,
        [`.${breakpointName}${$}${i + 1}\\/${columns}`]: {
          flexBasis: percentage(i + 1, columns),
        },
      }),
      {}
    ),
    // .flex-basis-100
    [`.${breakpointName}${$}100`]: {
      flexBasis: '100%',
    },
    // .flex-basis-auto
    [`.${breakpointName}${$}auto`]: {
      flexBasis: 'auto',
    },
  }));
}

export default flexBasis;
