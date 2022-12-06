/*
 * Copyright 2022 Marek Kobida
 */

export type DecodedResponsiveClassName = string;

export type EncodedResponsiveClassName<T extends string> =
  | T
  | ''
  | 0
  | false
  | { [breakpointName: string]: T }
  | [T, { [breakpointName: string]: T }]
  | [T]
  | null
  | undefined;

function decodeResponsiveClassName(
  className: string,
  encodedResponsiveClassName: EncodedResponsiveClassName<string>
): DecodedResponsiveClassName[] {
  const decodedResponsiveClassNames: DecodedResponsiveClassName[] = [];

  // T
  if (typeof encodedResponsiveClassName === 'string') {
    decodedResponsiveClassNames.push(`${className}${encodedResponsiveClassName}`);
  }

  // [T]
  else if (Array.isArray(encodedResponsiveClassName)) {
    decodedResponsiveClassNames.push(`${className}${encodedResponsiveClassName[0]}`);

    // [T, { [breakpointName: string]: T }]
    if (encodedResponsiveClassName[1]) {
      for (const breakpointName in encodedResponsiveClassName[1]) {
        decodedResponsiveClassNames.push(
          `${breakpointName}${className}${encodedResponsiveClassName[1][breakpointName]}`
        );
      }
    }
  }

  // { [breakpointName: string]: T }
  else if (encodedResponsiveClassName !== null && typeof encodedResponsiveClassName === 'object') {
    for (const breakpointName in encodedResponsiveClassName) {
      decodedResponsiveClassNames.push(`${breakpointName}${className}${encodedResponsiveClassName[breakpointName]}`);
    }
  }

  return decodedResponsiveClassNames;
}

export default decodeResponsiveClassName;
