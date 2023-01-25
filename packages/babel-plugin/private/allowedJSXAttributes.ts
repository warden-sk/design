/*
 * Copyright 2023 Marek Kobida
 */

import dictionary from './dictionary';

const allowedJSXAttributes: { [attributeName: string]: string } = {
  alignContent: dictionary.get('align-content-'),
  alignItems: dictionary.get('align-items-'),
  alignSelf: dictionary.get('align-self-'),
  cursor: dictionary.get('cursor-'),
  display: dictionary.get('d-'),
  flex: dictionary.get('flex-'),
  flexBasis: dictionary.get('flex-basis-'),
  flexDirection: dictionary.get('flex-direction-'),
  flexWrap: dictionary.get('flex-wrap-'),
  fontSize: dictionary.get('font-size-'),
  fontWeight: dictionary.get('font-weight-'),
  gap: dictionary.get('gap-'),
  gapX: dictionary.get('gap-x-'),
  gapY: dictionary.get('gap-y-'),
  gridTemplateColumns: dictionary.get('grid-template-columns-'),
  height: dictionary.get('height-'),
  justifyContent: dictionary.get('justify-content-'),
  justifyItems: dictionary.get('justify-items-'),
  justifySelf: dictionary.get('justify-self-'),
  lineHeight: dictionary.get('line-height-'),
  m: dictionary.get('m-'),
  mB: dictionary.get('m-b-'),
  mL: dictionary.get('m-l-'),
  mR: dictionary.get('m-r-'),
  mT: dictionary.get('m-t-'),
  mX: dictionary.get('m-x-'),
  mY: dictionary.get('m-y-'),
  opacity: dictionary.get('opacity-'),
  p: dictionary.get('p-'),
  pB: dictionary.get('p-b-'),
  pL: dictionary.get('p-l-'),
  pR: dictionary.get('p-r-'),
  pT: dictionary.get('p-t-'),
  pX: dictionary.get('p-x-'),
  pY: dictionary.get('p-y-'),
  spaceX: dictionary.get('space-x-'),
  spaceY: dictionary.get('space-y-'),
  textAlign: dictionary.get('text-align-'),
  whiteSpace: dictionary.get('white-space-'),
  width: dictionary.get('width-'),
};

export default allowedJSXAttributes;
