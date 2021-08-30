/*
 * Copyright 2021 Marek Kobida
 */

type DecodedResponsiveClassName = string;

type EncodedResponsiveClassName<T extends number | string> =
  | T
  | [T, { [breakpointName: string]: T }]
  | [T]
  | { [breakpointName: string]: T };

function decodeResponsiveClassName(
  $: string,
  encodedResponsiveClassName?: EncodedResponsiveClassName<number | string>
): DecodedResponsiveClassName[] {
  let decodedResponsiveClassNames: DecodedResponsiveClassName[] = [];

  function addDecodedResponsiveClassName(decodedResponsiveClassName: DecodedResponsiveClassName) {
    decodedResponsiveClassNames = [...decodedResponsiveClassNames, decodedResponsiveClassName];
  }

  // T
  if (typeof encodedResponsiveClassName === 'number') {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  // T
  else if (typeof encodedResponsiveClassName === 'string') {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  // [T]
  else if (Array.isArray(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName[0]}`);

    // [T, { [breakpointName: string]: T }]
    if (encodedResponsiveClassName[1]) {
      for (const breakpointName in encodedResponsiveClassName[1]) {
        addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[1][breakpointName]}`);
      }
    }
  }

  // { [breakpointName: string]: T }
  else if (encodedResponsiveClassName !== null && typeof encodedResponsiveClassName === 'object') {
    for (const breakpointName in encodedResponsiveClassName) {
      addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[breakpointName]}`);
    }
  }

  return decodedResponsiveClassNames;
}

export default decodeResponsiveClassName;
