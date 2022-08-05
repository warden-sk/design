/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';

function container(): EnhancedCSSProperties {
  return forBreakpoints(breakpoint =>
    breakpoint[0]
      ? {
          '.container': {
            // maxWidth: breakpoint[1],
          },
        }
      : {
          '.container': {
            maxWidth: '80rem',
            // width: '100%',
          },
        }
  );
}

export default container;
