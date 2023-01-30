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

export function css(
  breakpointName: string,
  [propertyName1, propertyName2]: [string, string],
  left: string,
  right: string
): EnhancedCSSProperties {
  const m = dictionary.get(propertyName1);
  const mB = dictionary.get(`${propertyName1}B`);
  const mL = dictionary.get(`${propertyName1}L`);
  const mR = dictionary.get(`${propertyName1}R`);
  const mT = dictionary.get(`${propertyName1}T`);
  const mX = dictionary.get(`${propertyName1}X`);
  const mY = dictionary.get(`${propertyName1}Y`);

  return {
    [`.${breakpointName}${m}${dictionary.get(left)}`]: {
      [`${propertyName2}Style`]: 'solid',
      [`${propertyName2}Width`]: right,
    },
    // "b", "y"
    [`.${breakpointName}${mB}${dictionary.get(left)},.${breakpointName}${mY}${dictionary.get(left)}`]: {
      [`${propertyName2}BottomStyle`]: 'solid',
      [`${propertyName2}BottomWidth`]: right,
    },
    // "l", "x"
    [`.${breakpointName}${mL}${dictionary.get(left)},.${breakpointName}${mX}${dictionary.get(left)}`]: {
      [`${propertyName2}LeftStyle`]: 'solid',
      [`${propertyName2}LeftWidth`]: right,
    },
    // "r", "x"
    [`.${breakpointName}${mR}${dictionary.get(left)},.${breakpointName}${mX}${dictionary.get(left)}`]: {
      [`${propertyName2}RightStyle`]: 'solid',
      [`${propertyName2}RightWidth`]: right,
    },
    // "t", "y"
    [`.${breakpointName}${mT}${dictionary.get(left)},.${breakpointName}${mY}${dictionary.get(left)}`]: {
      [`${propertyName2}TopStyle`]: 'solid',
      [`${propertyName2}TopWidth`]: right,
    },
  };
}

function border(): EnhancedCSSProperties {
  return forBreakpoints(([breakpointName]) => {
    return {
      ...sizes.reduce(
        (_, [left, right]) => ({
          ..._,
          ...css(breakpointName, ['border', 'border'], left, right),
        }),
        {}
      ),
    };
  });
}

export default border;
