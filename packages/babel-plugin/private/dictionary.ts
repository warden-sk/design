/*
 * Copyright 2023 Marek Kobida
 */

import Dictionary from '../../../../koala.sk/packages/Dictionary';
import design_decoded_keys from '../../../../koala.sk/packages/Dictionary/design_decoded_keys';
import storage from '@warden-sk/design/private/storage';

const dictionary = new Dictionary([
  ...Object.keys(storage).reduce<string[]>(($, key) => [...$, ...storage[key as 'AlignContent']], []),
  //
  ...design_decoded_keys,
]);

export default dictionary;
