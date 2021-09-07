/*
 * Copyright 2021 Marek Kobida
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
  let decodedClassNames: DecodedClassName[] = [];

  function addDecodedClassName(decodedClassName: DecodedClassName) {
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

export default decodeClassName;
