/*
 * Copyright 2022 Marek Kobida
 */

import type * as CSS from 'csstype';
import type { EnhancedCSSProperties } from './forBreakpoints';

function encodePropertyName(propertyName: string): string {
  return propertyName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}

/* (1) */ const testPattern = /\.([^,\s]+)/g;
/* (2) */ export let testRows: string[] = [];
/* (3) */ function test(propertyName: string) {
  const [...properties] = propertyName.matchAll(testPattern);

  properties.forEach(property => (testRows = [...testRows, property[1]]));
}

function toString(properties: CSS.Properties | EnhancedCSSProperties, $ = false): string {
  let css = '';

  for (const propertyName in properties) {
    test(encodePropertyName(propertyName));

    const property = properties[propertyName as 'alignContent'];

    if (typeof property === 'number' || typeof property === 'string') {
      css += `${encodePropertyName(propertyName)}:${property}${$ ? ' !important;' : ';'}`;
    }

    // @media
    if (typeof property === 'object') {
      css += `${encodePropertyName(propertyName)}{${toString(property, $)}}`;
    }
  }

  return css;
}

export default toString;
