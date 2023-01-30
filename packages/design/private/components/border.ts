/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

const sizes = [
  ['0', '0'], //         0
  ['1', '0.0625rem'], // 1px
  ['2', '0.125rem'], //  2px
] as const;

function border(): EnhancedCSSProperties {
  return forBreakpoints(([breakpointName]) => {
    function css(left: string, right: '0' | 'auto' | `${string}rem`): EnhancedCSSProperties {
      const m = dictionary.get('border');
      const mB = dictionary.get('borderB');
      const mL = dictionary.get('borderL');
      const mR = dictionary.get('borderR');
      const mT = dictionary.get('borderT');
      const mX = dictionary.get('borderX');
      const mY = dictionary.get('borderY');

      const property = 'border';

      return {
        [`.${breakpointName}${m}${dictionary.get(left)}`]: {
          [`${property}Style`]: 'solid',
          [`${property}Width`]: right,
        },
        // "b", "y"
        [`.${breakpointName}${mB}${dictionary.get(left)},.${breakpointName}${mY}${dictionary.get(left)}`]: {
          [`${property}BottomStyle`]: 'solid',
          [`${property}BottomWidth`]: right,
        },
        // "l", "x"
        [`.${breakpointName}${mL}${dictionary.get(left)},.${breakpointName}${mX}${dictionary.get(left)}`]: {
          [`${property}LeftStyle`]: 'solid',
          [`${property}LeftWidth`]: right,
        },
        // "r", "x"
        [`.${breakpointName}${mR}${dictionary.get(left)},.${breakpointName}${mX}${dictionary.get(left)}`]: {
          [`${property}RightStyle`]: 'solid',
          [`${property}RightWidth`]: right,
        },
        // "t", "y"
        [`.${breakpointName}${mT}${dictionary.get(left)},.${breakpointName}${mY}${dictionary.get(left)}`]: {
          [`${property}TopStyle`]: 'solid',
          [`${property}TopWidth`]: right,
        },
      };
    }

    return {
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(left, right),
        }),
        {}
      ),
    };
  });
}

export default border;
