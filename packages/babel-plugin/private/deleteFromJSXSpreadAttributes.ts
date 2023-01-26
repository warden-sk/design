/*
 * Copyright 2023 Marek Kobida
 */

import AllowedJSXAttributes from './allowedJSXAttributes';

function deleteFromJSXSpreadAttributes(attributes: any): any {
  const $ = Object.keys(attributes).reduce(($$, key) => {
    const attribute = attributes[key];

    if (key === 'className') {
      return $$;
    }

    if (key in AllowedJSXAttributes) {
      return $$;
    }

    return { ...$$, [key]: attribute };
  }, {});

  return $;
}

export default deleteFromJSXSpreadAttributes;
