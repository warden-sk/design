/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import forBreakpoints from '../forBreakpoints';

function height(): EnhancedCSS {
  const $ = allowedJSXAttributes['height'];

  return forBreakpoints(([b]) => ({
    // .height-0
    [`.${b}${$}0`]: {
      height: 0,
    },
    // .height-100
    [`.${b}${$}100`]: {
      height: '100%',
    },
    // .height-auto
    [`.${b}${$}auto`]: {
      height: 'auto',
    },
  }));
}

export default height;
