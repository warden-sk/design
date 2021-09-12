/*
 * Copyright 2021 Marek Kobida
 */

import { CSS } from './forBreakpoints';
import React from 'react';

function _1(propertyName: string): string {
  return propertyName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}

function toString(properties: CSS | React.CSSProperties): string {
  let css = '';

  for (const propertyName in properties) {
    const property = properties[propertyName as 'alignContent'];

    if (typeof property === 'number' || typeof property === 'string') {
      css += `${_1(propertyName)}:${property};`;
    }

    if (typeof property === 'object') {
      css += `${propertyName}{${toString(property)}}`;
    }
  }

  return css;
}

export default toString;
