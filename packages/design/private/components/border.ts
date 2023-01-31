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
  const $ = dictionary.get('border');
  const b = dictionary.get(`borderBottom`);
  const l = dictionary.get(`borderLeft`);
  const r = dictionary.get(`borderRight`);
  const t = dictionary.get(`borderTop`);
  const x = dictionary.get(`borderX`);
  const y = dictionary.get(`borderY`);

  return {
    [`.${breakpointName}${$}${dictionary.get(left)}`]: {
      borderStyle: 'solid',
      borderWidth: right,
    },
    // "b", "y"
    [`.${breakpointName}${b}${dictionary.get(left)},.${breakpointName}${y}${dictionary.get(left)}`]: {
      borderBottomStyle: 'solid',
      borderBottomWidth: right,
    },
    // "l", "x"
    [`.${breakpointName}${l}${dictionary.get(left)},.${breakpointName}${x}${dictionary.get(left)}`]: {
      borderLeftStyle: 'solid',
      borderLeftWidth: right,
    },
    // "r", "x"
    [`.${breakpointName}${r}${dictionary.get(left)},.${breakpointName}${x}${dictionary.get(left)}`]: {
      borderRightStyle: 'solid',
      borderRightWidth: right,
    },
    // "t", "y"
    [`.${breakpointName}${t}${dictionary.get(left)},.${breakpointName}${y}${dictionary.get(left)}`]: {
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
