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
  cursor: 'cursor-',
  display: 'd-',
  flex: 'flex-',
  flexBasis: 'flex-basis-',
  flexDirection: 'flex-direction-',
  flexWrap: 'flex-wrap-',
  fontSize: 'font-size-',
  fontWeight: 'font-weight-',
  gap: 'gap-',
  gapX: 'gap-x-',
  gapY: 'gap-y-',
  gridTemplateColumns: 'grid-template-columns-',
  height: 'height-',
  justifyContent: 'justify-content-',
  justifyItems: 'justify-items-',
  justifySelf: 'justify-self-',
  lineHeight: 'line-height-',
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
  spaceX: 'space-x-',
  spaceY: 'space-y-',
  textAlign: 'text-align-',
  whiteSpace: 'white-space-',
  width: 'width-',
} as const;

export default allowedJSXAttributes;
