/*
 * Copyright 2022 Marek Kobida
 */

import forBreakpoints, { CSS } from '../forBreakpoints';
import allowedJSXAttributes from '../../../babel-plugin/private/allowedJSXAttributes';

const lineHeights = [
  ['1', '1'],
  ['2', '1.25'],
  ['3', '1.5'],
  ['4', '1.75'],
  ['5', '2'],
] as const;

function lineHeight(): CSS {
  return forBreakpoints(([breakpoint]) =>
    lineHeights.reduce(
      (css, [left, right]) => ({
        ...css,
        [`.${breakpoint}${allowedJSXAttributes['lineHeight']}${left}`]: {
          lineHeight: `${right} !important`,
        },
      }),
      {}
    )
  );
}

export default lineHeight;
