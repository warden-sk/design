/*
 * Copyright 2023 Marek Kobida
 */

import Dictionary from '../../../../koala.sk/packages/Dictionary';
import allowedJSXAttributes from './allowedJSXAttributes';

const dictionary = new Dictionary([
  ...Object.keys(allowedJSXAttributes).reduce<string[]>(($, key) => [...$, key], []),
  // @ts-ignore
  ...Object.keys(allowedJSXAttributes).reduce<string[]>(($, key) => [...$, ...allowedJSXAttributes[key]], []),
]);

export default dictionary;
