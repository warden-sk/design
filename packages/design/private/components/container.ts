/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSS } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';

function container(): EnhancedCSS {
  return forBreakpoints(breakpoint =>
    breakpoint[0]
      ? {
          '.container': {
            maxWidth: `${breakpoint[1]} !important`,
          },
        }
      : {
          '.container': {
            width: '100% !important',
          },
        }
  );
}

export default container;
