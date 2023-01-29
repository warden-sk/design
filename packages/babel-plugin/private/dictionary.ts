/*
 * Copyright 2023 Marek Kobida
 */

import Dictionary from '../../../../koala.sk/packages/Dictionary';
import storage from '@warden-sk/design/private/storage';
import allowedJSXAttributes from './allowedJSXAttributes';

const dictionary = new Dictionary([
  ...allowedJSXAttributes,
  ...Object.keys(storage).reduce<string[]>(($, key) => [...$, ...storage[key as 'AlignContent']], []),
]);

export default dictionary;
