/*
 * Copyright 2023 Marek Kobida
 */

import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';

function opacity(): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['opacity'];

  return forBreakpoints(([breakpointName]) => ({
    // .opacity-0
    [`.${breakpointName}${$}0`]: {
      opacity: '0',
    },
    // .opacity-25
    [`.${breakpointName}${$}25`]: {
      opacity: '0.25',
    },
    // .opacity-50
    [`.${breakpointName}${$}50`]: {
      opacity: '0.5',
    },
    // .opacity-75
    [`.${breakpointName}${$}75`]: {
      opacity: '0.75',
    },
    // .opacity-100
    [`.${breakpointName}${$}100`]: {
      opacity: '1',
    },
  }));
}

export default opacity;
