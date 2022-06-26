/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import forBreakpoints from '../forBreakpoints';

function height(): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['height'];

  return forBreakpoints(([breakpointName]) => ({
    // .height-0
    [`.${breakpointName}${$}0`]: {
      height: '0',
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
