"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function decodeClassName(...encodedClassNames) {
    const decodedClassNames = [];
    for (const encodedClassName of encodedClassNames) {
        // EncodedClassName[]
        if (Array.isArray(encodedClassName)) {
            const decodedClassName = decodeClassName(...encodedClassName);
            if (typeof decodedClassName === 'string') {
                decodedClassNames.push(decodedClassName);
            }
        }
        // number
        else if (typeof encodedClassName === 'number') {
            decodedClassNames.push(`${encodedClassName}`);
        }
        // string
        else if (typeof encodedClassName === 'string') {
            for (const decodedClassName of encodedClassName.split(' ')) {
                decodedClassNames.push(decodedClassName);
            }
        }
        // { [decodedClassName: string]: boolean | null | undefined }
        else if (encodedClassName !== null && typeof encodedClassName === 'object') {
            for (const decodedClassName in encodedClassName) {
                if (encodedClassName[decodedClassName]) {
                    decodedClassNames.push(decodedClassName);
                }
            }
        }
    }
    if (decodedClassNames.length) {
        return decodedClassNames.join(' ');
    }
}
exports.default = decodeClassName;
