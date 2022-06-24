/*
 * Copyright 2022 Marek Kobida
 */

import type { CSS } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';

function container(): CSS {
  return forBreakpoints(b =>
    b[0] ? { '.container': { maxWidth: `${b[1]} !important` } } : { '.container': { width: '100% !important' } }
  );
}

export default container;
