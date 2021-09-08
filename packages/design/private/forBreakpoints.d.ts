import React from 'react';
import breakpoints from './breakpoints';
export interface CSS {
    [_1: string]: React.CSSProperties | {
        [_2: string]: React.CSSProperties;
    };
}
declare function forBreakpoints(_1: (breakpointName: '' | typeof breakpoints[number]['name']) => CSS): CSS;
export default forBreakpoints;
