/*
 * Copyright 2023 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

function height(): EnhancedCSSProperties {
  const $ = dictionary.get('height');

  return forBreakpoints(([breakpointName]) => ({
    // .height-0
    [`.${breakpointName}${$}${dictionary.get('0')}`]: {
      height: '0',
    },
    // .height-25
    [`.${breakpointName}${$}${dictionary.get('25')}`]: {
      height: '25%',
    },
    // .height-50
    [`.${breakpointName}${$}${dictionary.get('50')}`]: {
      height: '50%',
    },
    // .height-75
    [`.${breakpointName}${$}${dictionary.get('75')}`]: {
      height: '75%',
    },
    // .height-100
    [`.${breakpointName}${$}${dictionary.get('100')}`]: {
      height: '100%',
    },
    // .height-auto
    [`.${breakpointName}${$}${dictionary.get('auto')}`]: {
      height: 'auto',
    },
  }));
}

export default height;
