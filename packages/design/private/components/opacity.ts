/*
 * Copyright 2023 Marek Kobida
 */

import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';
import dictionary from '@warden-sk/babel-plugin/private/dictionary';

function opacity(): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['opacity'];

  return forBreakpoints(([breakpointName]) => ({
    // .opacity-0
    [`.${breakpointName}${$}${dictionary.get('0')}`]: {
      opacity: '0',
    },
    // .opacity-25
    [`.${breakpointName}${$}${dictionary.get('25')}`]: {
      opacity: '0.25',
    },
    // .opacity-50
    [`.${breakpointName}${$}${dictionary.get('50')}`]: {
      opacity: '0.5',
    },
    // .opacity-75
    [`.${breakpointName}${$}${dictionary.get('75')}`]: {
      opacity: '0.75',
    },
    // .opacity-100
    [`.${breakpointName}${$}${dictionary.get('100')}`]: {
      opacity: '1',
    },
  }));
}

export default opacity;
