/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

const sizes = [
  ['0', '0'], //        0
  ['1', '0.125rem'], // 2px
] as const;

function borderRadius(): EnhancedCSSProperties {
  const $ = dictionary.get('borderRadius');

  return forBreakpoints(([breakpointName]) => {
    return {
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}${$}${dictionary.get(left)}`]: {
            borderRadius: right,
          },
        }),
        {}
      ),
    };
  });
}

export default borderRadius;
