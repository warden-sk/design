"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function decodeClassName(...encodedClassNames) {
    let decodedClassNames = [];
    function addDecodedClassName(decodedClassName) {
        decodedClassNames = [...decodedClassNames, decodedClassName];
    }
    for (const encodedClassName of encodedClassNames) {
        // EncodedClassName[]
        if (Array.isArray(encodedClassName)) {
            const decodedClassName = decodeClassName(...encodedClassName);
            if (typeof decodedClassName === 'string') {
                addDecodedClassName(decodedClassName);
            }
        }
        // number
        else if (typeof encodedClassName === 'number') {
            addDecodedClassName(`${encodedClassName}`);
        }
        // string
        else if (typeof encodedClassName === 'string') {
            for (const decodedClassName of encodedClassName.split(' ')) {
                addDecodedClassName(decodedClassName);
            }
        }
        // { [decodedClassName: string]: boolean | null | undefined }
        else if (encodedClassName !== null && typeof encodedClassName === 'object') {
            for (const decodedClassName in encodedClassName) {
                if (encodedClassName[decodedClassName]) {
                    addDecodedClassName(decodedClassName);
                }
            }
        }
    }
    if (decodedClassNames.length > 0) {
        return decodedClassNames.join(' ');
    }
}
exports.default = decodeClassName;
