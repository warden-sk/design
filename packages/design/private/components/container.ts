/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

function container(): EnhancedCSSProperties {
  const $ = dictionary.get('container');

  return forBreakpoints(breakpoint =>
    breakpoint[0]
      ? {
          [`.${$}`]: {
            maxWidth: breakpoint[1],
          },
        }
      : {
          [`.${$}`]: {
            width: '100%',
          },
        }
  );
}

export default container;
