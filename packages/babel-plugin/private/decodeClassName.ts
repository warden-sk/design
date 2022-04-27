/*
 * Copyright 2022 Marek Kobida
 */

export type DecodedClassName = string | undefined;

export type EncodedClassName =
  | EncodedClassName[]
  | boolean
  | number
  | string
  | { [decodedClassName: string]: boolean | null | undefined }
  | null
  | undefined;

function decodeClassName(...encodedClassNames: EncodedClassName[]): DecodedClassName {
  const decodedClassNames: DecodedClassName[] = [];

  for (const encodedClassName of encodedClassNames) {
    // EncodedClassName[]
    if (Array.isArray(encodedClassName)) {
      const decodedClassName = decodeClassName(...encodedClassName);

      decodedClassNames.push(decodedClassName);
    }

    // number
    else if (typeof encodedClassName === 'number') {
      decodedClassNames.push(`${encodedClassName}`);
    }

    // string
    else if (typeof encodedClassName === 'string') {
      decodedClassNames.push(encodedClassName);
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

  return decodedClassNames.filter(decodedClassName => !!decodedClassName).join(' ');
}

export default decodeClassName;
