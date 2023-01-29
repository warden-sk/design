/*
 * Copyright 2023 Marek Kobida
 */

import * as t from '@warden-sk/design/private/storage';

const allowedJSXAttributes = {
  alignContent: t.AlignContent,
  alignItems: t.AlignItems,
  alignSelf: t.AlignSelf,
  cursor: t.Cursor,
  display: t.Display,
  flex: t.Flex,
  flexBasis: t.FlexBasis,
  flexDirection: t.FlexDirection,
  flexWrap: t.FlexWrap,
  fontSize: t.FontSize,
  fontWeight: t.FontWeight,
  gap: t.S,
  gapX: t.S,
  gapY: t.S,
  gridTemplateColumns: t.GridTemplateColumns,
  height: t.Height,
  justifyContent: t.JustifyContent,
  justifyItems: t.JustifyItems,
  justifySelf: t.JustifySelf,
  lineHeight: t.LineHeight,
  m: t.Margin,
  mB: t.Margin,
  mL: t.MarginLeft,
  mR: t.Margin,
  mT: t.Margin,
  mX: t.Margin,
  mY: t.Margin,
  opacity: t.Opacity,
  p: t.S,
  pB: t.S,
  pL: t.S,
  pR: t.S,
  pT: t.S,
  pX: t.S,
  pY: t.S,
  spaceX: t.S,
  spaceY: t.S,
  textAlign: t.TextAlign,
  whiteSpace: t.WhiteSpace,
  width: t.Width,
} as const;

export default allowedJSXAttributes;
