/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';

function height(): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['height'];

  return forBreakpoints(([breakpointName]) => ({
    // .height-0
    [`.${breakpointName}${$}0`]: {
      height: '0',
    },
    // .height-25
    [`.${breakpointName}${$}25`]: {
      height: '25%',
    },
    // .height-50
    [`.${breakpointName}${$}50`]: {
      height: '50%',
    },
    // .height-75
    [`.${breakpointName}${$}75`]: {
      height: '75%',
    },
    // .height-100
    [`.${breakpointName}${$}100`]: {
      height: '100%',
    },
    // .height-auto
    [`.${breakpointName}${$}auto`]: {
      height: 'auto',
    },
  }));
}

export default height;
