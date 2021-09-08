/*
 * Copyright 2021 Marek Kobida
 */

import { CSS } from './forBreakpoints';
import React from 'react';
import formatPropertyName from './formatPropertyName';

function toString(properties: CSS | React.CSSProperties): string {
  let css = '';

  for (const propertyName in properties) {
    const property = properties[propertyName as 'alignContent'];

    if (typeof property === 'number' || typeof property === 'string')
      css += `${formatPropertyName(propertyName)}:${property};`;

    if (typeof property === 'object') css += `${propertyName}{${toString(property)}}`;
  }

  return css;
}

export default toString;
