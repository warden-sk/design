/*
 * Copyright 2022 Marek Kobida
 */

export type DecodedClassName = string;

export type EncodedClassName =
  | EncodedClassName[]
  | boolean
  | null
  | number
  | string
  | undefined
  | { [decodedClassName: string]: boolean | null | undefined };

function decodeClassName(...encodedClassNames: EncodedClassName[]): DecodedClassName | undefined {
  const decodedClassNames: DecodedClassName[] = [];

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

export default decodeClassName;
