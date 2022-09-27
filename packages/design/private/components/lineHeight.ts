/*
 * Copyright 2022 Marek Kobida
 */

import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';
import type { EnhancedCSSProperties } from '../forBreakpoints';
import forBreakpoints from '../forBreakpoints';

const lineHeights = [
  ['1', '1'],
  ['2', '1.25'],
  ['3', '1.5'],
  ['4', '1.75'],
  ['5', '2'],
] as const;

function lineHeight(): EnhancedCSSProperties {
  const $ = allowedJSXAttributes['lineHeight'];

  return forBreakpoints(([breakpointName]) =>
    lineHeights.reduce(
      (css, [left, right]) => ({
        ...css,
        [`.${breakpointName}${$}${left}`]: {
          lineHeight: right,
        },
      }),
      {}
    )
  );
}

export default lineHeight;
