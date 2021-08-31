/*
 * Copyright 2021 Marek Kobida
 */

import { EncodedResponsiveClassName } from './private/helpers/decodeResponsiveClassName';
import React from 'react';

declare global {
  namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      m?: EncodedResponsiveClassName<number>;
      mB?: EncodedResponsiveClassName<number>;
      mL?: EncodedResponsiveClassName<number>;
      mR?: EncodedResponsiveClassName<number>;
      mT?: EncodedResponsiveClassName<number>;
      mX?: EncodedResponsiveClassName<number>;
      mY?: EncodedResponsiveClassName<number>;
      p?: EncodedResponsiveClassName<number>;
      pB?: EncodedResponsiveClassName<number>;
      pL?: EncodedResponsiveClassName<number>;
      pR?: EncodedResponsiveClassName<number>;
      pT?: EncodedResponsiveClassName<number>;
      pX?: EncodedResponsiveClassName<number>;
      pY?: EncodedResponsiveClassName<number>;
    }
  }
}
