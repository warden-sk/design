"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function decodeResponsiveClassName($, encodedResponsiveClassName) {
    let decodedResponsiveClassNames = [];
    function addDecodedResponsiveClassName(decodedResponsiveClassName) {
        decodedResponsiveClassNames = [...decodedResponsiveClassNames, decodedResponsiveClassName];
    }
    // T
    if (typeof encodedResponsiveClassName === 'number') {
        addDecodedResponsiveClassName(`${$}-${encodedResponsiveClassName}`);
    }
    // T
    else if (typeof encodedResponsiveClassName === 'string') {
        addDecodedResponsiveClassName(`${$}-${encodedResponsiveClassName}`);
    }
    // [T]
    else if (Array.isArray(encodedResponsiveClassName)) {
        addDecodedResponsiveClassName(`${$}-${encodedResponsiveClassName[0]}`);
        // [T, { [breakpointName: string]: T }]
        if (encodedResponsiveClassName[1]) {
            for (const breakpointName in encodedResponsiveClassName[1]) {
                addDecodedResponsiveClassName(`${breakpointName}${$}-${encodedResponsiveClassName[1][breakpointName]}`);
            }
        }
    }
    // { [breakpointName: string]: T }
    else if (encodedResponsiveClassName !== null && typeof encodedResponsiveClassName === 'object') {
        for (const breakpointName in encodedResponsiveClassName) {
            addDecodedResponsiveClassName(`${breakpointName}${$}-${encodedResponsiveClassName[breakpointName]}`);
        }
    }
    return decodedResponsiveClassNames;
}
exports.default = decodeResponsiveClassName;
