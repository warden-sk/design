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

interface Attributes {
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
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | Attributes;
      abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement> | Attributes;
      article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> | Attributes;
      b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement> | Attributes;
      bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement> | Attributes;
      br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement> | Attributes;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | Attributes;
      canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> | Attributes;
      caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | Attributes;
      colgroup:
        | React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
        | Attributes;
      data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement> | Attributes;
      datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement> | Attributes;
      dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> | Attributes;
      dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement> | Attributes;
      dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement> | Attributes;
      fieldset:
        | React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>
        | Attributes;
      figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> | Attributes;
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | Attributes;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | Attributes;
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | Attributes;
      h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | Attributes;
      h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | Attributes;
      h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | Attributes;
      head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> | Attributes;
      header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement> | Attributes;
      html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> | Attributes;
      i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> | Attributes;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | Attributes;
      input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | Attributes;
      ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement> | Attributes;
      kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> | Attributes;
      legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> | Attributes;
      li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> | Attributes;
      link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> | Attributes;
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement> | Attributes;
      mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement> | Attributes;
      meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement> | Attributes;
      ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> | Attributes;
      optgroup:
        | React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>
        | Attributes;
      option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> | Attributes;
      output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> | Attributes;
      param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement> | Attributes;
      picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> | Attributes;
      progress:
        | React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>
        | Attributes;
      q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> | Attributes;
      rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> | Attributes;
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> | Attributes;
      slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement> | Attributes;
      small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement> | Attributes;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> | Attributes;
      strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> | Attributes;
      sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> | Attributes;
      tbody:
        | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
        | Attributes;
      td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> | Attributes;
      template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement> | Attributes;
      textarea:
        | React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
        | Attributes;
      tfoot:
        | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
        | Attributes;
      th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> | Attributes;
      thead:
        | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
        | Attributes;
      time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> | Attributes;
      tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> | Attributes;
      track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement> | Attributes;
      u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> | Attributes;
      var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
      video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> | Attributes;
      wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | Attributes;
    }
  }
}
