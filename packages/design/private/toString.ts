/*
 * Copyright 2022 Marek Kobida
 */

import type * as CSS from 'csstype';
import type { EnhancedCSSProperties } from './forBreakpoints';

function encodePropertyName(propertyName: string): string {
  return propertyName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}

function toString(properties: CSS.Properties | EnhancedCSSProperties): string {
  let css = '';

  for (const propertyName in properties) {
    const property = properties[propertyName as 'alignContent'];

    if (typeof property === 'number' || typeof property === 'string') {
      css += `${encodePropertyName(propertyName)}:${property} !important;`;
    }

    if (typeof property === 'object') {
      css += `${propertyName}{${toString(property)}}`;
    }
  }

  return css;
}

export default toString;
