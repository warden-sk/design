/*
 * Copyright 2022 Marek Kobida
 */

import type { EnhancedCSSProperties } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import forBreakpoints from '../forBreakpoints';

const cursors = [
    'pointer',
] as const;

function cursor(): EnhancedCSSProperties {
  const left = allowedJSXAttributes['cursor'];

  return forBreakpoints(([breakpointName]) =>
  cursors.reduce(
      (css, right) => ({
        ...css,
        [`.${breakpointName}${left}${right}`]: {
          cursor: right,
        },
      }),
      {}
    )
  );
}

export default cursor;
