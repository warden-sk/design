/*
 * Copyright 2021 Marek Kobida
 */

import { CSS } from './forBreakpoints';
import React from 'react';

function isReactCSSProperties(property: string, properties: React.CSSProperties): properties is React.CSSProperties {
  return !/^@/.test(property);
}

function propertiesToString(properties: React.CSSProperties): string {
  let css = '';

  for (const property in properties) {
    // from "alignContent" to "align-content"
    const _ = property.replace(/[A-Z]/g, _3 => `-${_3.toLowerCase()}`);

    css += `${_}:${properties[property as 'alignContent']};`;
  }

  return css;
}

function toString(before: CSS): string {
  let after = '';

  for (const property in before) {
    const properties = before[property];

    isReactCSSProperties(property, properties)
      ? (after += `${property}{${propertiesToString(properties)}}`)
      : (after += `${property}{${toString(properties)}}`);
  }

  return after;
}

export default toString;
