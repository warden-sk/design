/*
 * Copyright 2023 Marek Kobida
 */

import AllowedJSXAttributes from './allowedJSXAttributes';
import decodeResponsiveClassName from './decodeResponsiveClassName';
import type { EncodedClassName } from './decodeClassName';

function decodeJSXSpreadAttributes(attributes: any): EncodedClassName[] {
  const $ = Object.keys(attributes).reduce<EncodedClassName[]>(($$, key) => {
    const attribute = attributes[key];

    if (key === 'className') {
      return [...$$, attribute];
    }

    if (key in AllowedJSXAttributes) {
      return [...$$, decodeResponsiveClassName(AllowedJSXAttributes[key], attribute)];
    }

    return $$;
  }, []);

  return $;
}

export default decodeJSXSpreadAttributes;
