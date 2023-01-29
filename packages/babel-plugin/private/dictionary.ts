/*
 * Copyright 2023 Marek Kobida
 */

import Dictionary from '../../../../koala.sk/packages/Dictionary';
import allowedJSXAttributes from './allowedJSXAttributes';

const dictionary = new Dictionary([
  ...Object.keys(allowedJSXAttributes).reduce<string[]>(($, key) => [...$, key], []),
  ...Object.keys(allowedJSXAttributes).reduce<string[]>(
    ($, key) => [...$, ...allowedJSXAttributes[key as keyof typeof allowedJSXAttributes]],
    []
  ),
]);

export default dictionary;
