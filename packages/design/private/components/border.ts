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

function css(breakpointName: string, left: string, right: string): EnhancedCSSProperties {
  const m = dictionary.get('border');
  const mB = dictionary.get(`borderB`);
  const mL = dictionary.get(`borderL`);
  const mR = dictionary.get(`borderR`);
  const mT = dictionary.get(`borderT`);
  const mX = dictionary.get(`borderX`);
  const mY = dictionary.get(`borderY`);

  return {
    [`.${breakpointName}${m}${dictionary.get(left)}`]: {
      borderStyle: 'solid',
      borderWidth: right,
    },
    // "b", "y"
    [`.${breakpointName}${mB}${dictionary.get(left)},.${breakpointName}${mY}${dictionary.get(left)}`]: {
      borderBottomStyle: 'solid',
      borderBottomWidth: right,
    },
    // "l", "x"
    [`.${breakpointName}${mL}${dictionary.get(left)},.${breakpointName}${mX}${dictionary.get(left)}`]: {
      borderLeftStyle: 'solid',
      borderLeftWidth: right,
    },
    // "r", "x"
    [`.${breakpointName}${mR}${dictionary.get(left)},.${breakpointName}${mX}${dictionary.get(left)}`]: {
      borderRightStyle: 'solid',
      borderRightWidth: right,
    },
    // "t", "y"
    [`.${breakpointName}${mT}${dictionary.get(left)},.${breakpointName}${mY}${dictionary.get(left)}`]: {
      borderTopStyle: 'solid',
      borderTopWidth: right,
    },
  };
}

function border(): EnhancedCSSProperties {
  return forBreakpoints(([breakpointName]) => {
    return {
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(breakpointName, left, right),
        }),
        {}
      ),
    };
  });
}

export default border;
