/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

const sizes = [
  ['0', '0'], //        0
  ['1', '0.125rem'], // 2px
  ['2', '0.25rem'], //  4px
  ['50', '50%'], //     50%
] as const;

function borderRadius(): EnhancedCSSProperties {
  const $ = dictionary.get('borderRadius');
  const b = dictionary.get('borderBottomRadius');
  const l = dictionary.get('borderLeftRadius');
  const r = dictionary.get('borderRightRadius');
  const t = dictionary.get('borderTopRadius');

  return forBreakpoints(([breakpointName]) => {
    return {
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          [`.${breakpointName}${$}${dictionary.get(left)}`]: {
            borderRadius: right,
          },
          [`.${breakpointName}${b}${dictionary.get(left)}`]: {
            borderBottomLeftRadius: right,
            borderBottomRightRadius: right,
          },
          [`.${breakpointName}${l}${dictionary.get(left)}`]: {
            borderBottomLeftRadius: right,
            borderTopLeftRadius: right,
          },
          [`.${breakpointName}${r}${dictionary.get(left)}`]: {
            borderBottomRightRadius: right,
            borderTopRightRadius: right,
          },
          [`.${breakpointName}${t}${dictionary.get(left)}`]: {
            borderTopLeftRadius: right,
            borderTopRightRadius: right,
          },
        }),
        {}
      ),
    };
  });
}

export default borderRadius;
