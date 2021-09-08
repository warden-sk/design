/*
 * Copyright 2021 Marek Kobida
 */

import 'react';
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Display,
  Flex,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  JustifyItems,
  JustifySelf,
  MarginLeft,
  S,
  Width,
} from './types';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/helpers/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/helpers/decodeResponsiveClassName';

interface _1 {
  alignContent?: EncodedResponsiveClassName<typeof AlignContent[number]>;
  alignItems?: EncodedResponsiveClassName<typeof AlignItems[number]>;
  alignSelf?: EncodedResponsiveClassName<typeof AlignSelf[number]>;
  className?: EncodedClassName;
  display?: EncodedResponsiveClassName<typeof Display[number]>;
  flex?: EncodedResponsiveClassName<typeof Flex[number]>;
  flexDirection?: EncodedResponsiveClassName<typeof FlexDirection[number]>;
  flexWrap?: EncodedResponsiveClassName<typeof FlexWrap[number]>;
  justifyContent?: EncodedResponsiveClassName<typeof JustifyContent[number]>;
  justifyItems?: EncodedResponsiveClassName<typeof JustifyItems[number]>;
  justifySelf?: EncodedResponsiveClassName<typeof JustifySelf[number]>;
  m?: EncodedResponsiveClassName<typeof S[number]>;
  mB?: EncodedResponsiveClassName<typeof S[number]>;
  mL?: EncodedResponsiveClassName<typeof MarginLeft[number]>;
  mR?: EncodedResponsiveClassName<typeof S[number]>;
  mT?: EncodedResponsiveClassName<typeof S[number]>;
  mX?: EncodedResponsiveClassName<typeof S[number]>;
  mY?: EncodedResponsiveClassName<typeof S[number]>;
  p?: EncodedResponsiveClassName<typeof S[number]>;
  pB?: EncodedResponsiveClassName<typeof S[number]>;
  pL?: EncodedResponsiveClassName<typeof S[number]>;
  pR?: EncodedResponsiveClassName<typeof S[number]>;
  pT?: EncodedResponsiveClassName<typeof S[number]>;
  pX?: EncodedResponsiveClassName<typeof S[number]>;
  pY?: EncodedResponsiveClassName<typeof S[number]>;
  width?: EncodedResponsiveClassName<typeof Width[number]>;
}

type _2<L extends React.HTMLAttributes<R>, R> = React.DetailedHTMLProps<L, R> | _1;

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: _2<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      abbr: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      address: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      area: _2<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
      article: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      aside: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      audio: _2<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
      b: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      base: _2<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
      bdi: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      bdo: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      blockquote: _2<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
      body: _2<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
      br: _2<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
      button: _2<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      canvas: _2<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
      caption: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      cite: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      code: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      col: _2<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      colgroup: _2<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      data: _2<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
      datalist: _2<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
      dd: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      del: _2<React.DelHTMLAttributes<HTMLElement>, HTMLElement>;
      details: _2<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
      dfn: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      div: _2<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      dl: _2<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
      dt: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      em: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      embed: _2<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
      fieldset: _2<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
      figcaption: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      figure: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      form: _2<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
      h1: _2<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: _2<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: _2<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h4: _2<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h5: _2<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h6: _2<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      head: _2<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
      header: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      hr: _2<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
      html: _2<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
      i: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      iframe: _2<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
      img: _2<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      input: _2<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      ins: _2<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
      kbd: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      label: _2<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      legend: _2<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
      li: _2<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
      link: _2<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
      main: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      map: _2<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
      mark: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      menu: _2<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
      meta: _2<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
      meter: _2<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
      nav: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      noscript: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      object: _2<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
      ol: _2<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
      optgroup: _2<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
      option: _2<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
      output: _2<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
      p: _2<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      param: _2<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
      picture: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      pre: _2<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
      progress: _2<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
      q: _2<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
      rp: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      rt: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ruby: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      s: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      samp: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      script: _2<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
      section: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      select: _2<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
      slot: _2<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
      small: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      source: _2<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
      span: _2<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      strong: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      style: _2<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
      sub: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      summary: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      sup: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      table: _2<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
      tbody: _2<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      td: _2<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
      template: _2<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
      textarea: _2<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
      tfoot: _2<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      th: _2<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
      thead: _2<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      time: _2<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
      title: _2<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
      tr: _2<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
      track: _2<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
      u: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ul: _2<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      var: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      video: _2<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
      wbr: _2<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
