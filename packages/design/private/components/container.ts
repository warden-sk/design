/*
 * Copyright 2021 Marek Kobida
 */

import forBreakpoints, { CSS } from '../forBreakpoints';

function container(): CSS {
  return forBreakpoints(b =>
    b[0] ? { '.container': { maxWidth: `${b[1]} !important` } } : { '.container': { width: '100% !important' } }
  );
}

export default container;
