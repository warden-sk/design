import React from 'react';
export interface CSS {
    [_1: string]: React.CSSProperties | {
        [_2: string]: React.CSSProperties;
    };
}
declare function forBreakpoints(_1: (breakpointName: string) => CSS): CSS;
export default forBreakpoints;
