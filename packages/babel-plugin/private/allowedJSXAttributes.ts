/*
 * Copyright 2022 Marek Kobida
 */

export interface AllowedJSXAttributes {
  [attributeName: string]: `${string}-`;
}

const allowedJSXAttributes: AllowedJSXAttributes = {
  alignContent: 'align-content-',
  alignItems: 'align-items-',
  alignSelf: 'align-self-',
  display: 'd-',
  flex: 'flex-',
  flexBasis: 'flex-basis-',
  flexDirection: 'flex-direction-',
  flexWrap: 'flex-wrap-',
  fontSize: 'font-size-',
  justifyContent: 'justify-content-',
  justifyItems: 'justify-items-',
  justifySelf: 'justify-self-',
  m: 'm-',
  mB: 'm-b-',
  mL: 'm-l-',
  mR: 'm-r-',
  mT: 'm-t-',
  mX: 'm-x-',
  mY: 'm-y-',
  p: 'p-',
  pB: 'p-b-',
  pL: 'p-l-',
  pR: 'p-r-',
  pT: 'p-t-',
  pX: 'p-x-',
  pY: 'p-y-',
  textAlign: 'text-align-',
  width: 'width-',
} as const;

export default allowedJSXAttributes;
