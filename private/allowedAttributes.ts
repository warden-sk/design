/*
 * Copyright 2021 Marek Kobida
 */

const allowedAttributes: Record<string, string> = {
  m: 'm-', // margin
  mB: 'm-b-', // margin-bottom
  mL: 'm-l-', // margin-left
  mR: 'm-r-', // margin-right
  mT: 'm-t-', // margin-top
  mX: 'm-x-', // margin-left, margin-right
  mY: 'm-y-', // margin-bottom, margin-top
  p: 'p-', // padding
  pB: 'p-b-', // padding-bottom
  pL: 'p-l-', // padding-left
  pR: 'p-r-', // padding-right
  pT: 'p-t-', // padding-top
  pX: 'p-x-', // padding-left, padding-right
  pY: 'p-y-', // padding-bottom, padding-top
};

export default allowedAttributes;
