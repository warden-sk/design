/*
 * Copyright 2021 Marek Kobida
 */

// @ts-nocheck
import { CSS } from './forBreakpoints';
import React from 'react';

function propertiesToString(properties: React.CSSProperties): string {
  let css = '';

  for (const property in properties) {
    // from "alignContent" to "align-content"
    const _ = property.replace(/[A-Z]/g, _3 => `-${_3.toLowerCase()}`);

    css += `${_}:${properties[property]};`;
  }

  return css;
}

function toString(before: CSS): string {
  let after = '';

  for (const property in before) {
    const properties = before[property];

    if (/^@media/.test(property)) after += `${property}{${toString(properties)}}`;
    else after += `${property}{${propertiesToString(properties)}}`;
  }

  return after;
}

export default toString;
