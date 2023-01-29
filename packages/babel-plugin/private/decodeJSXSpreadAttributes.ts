/*
 * Copyright 2023 Marek Kobida
 */

import allowedJSXAttributes from './allowedJSXAttributes';
import decodeResponsiveClassName from './decodeResponsiveClassName';
import type { EncodedClassName } from './decodeClassName';
import dictionary from './dictionary';

function decodeJSXSpreadAttributes(attributes: any): EncodedClassName[] {
  const $ = Object.keys(attributes).reduce<EncodedClassName[]>(($$, key) => {
    const attribute = attributes[key];

    if (key === 'className') {
      return [...$$, attribute];
    }

    if (allowedJSXAttributes.has(key)) {
      return [...$$, decodeResponsiveClassName(dictionary.get(key), attribute)];
    }

    return $$;
  }, []);

  return $;
}

export default decodeJSXSpreadAttributes;
