/*
 * Copyright 2021 Marek Kobida
 */

import 'react';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/helpers/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/helpers/decodeResponsiveClassName';

// https://drafts.csswg.org/css-align/#propdef-align-content
type AlignContent = ['baseline', ...ContentDistribution, ...ContentPosition];

// https://drafts.csswg.org/css-align/#propdef-align-items
type AlignItems = ['baseline', 'stretch', ...SelfPosition];

// https://drafts.csswg.org/css-align/#propdef-align-self
type AlignSelf = ['auto', 'baseline', 'stretch', ...SelfPosition];

// https://drafts.csswg.org/css-align/#typedef-content-distribution
type ContentDistribution = ['space-around', 'space-between', 'space-evenly', 'stretch'];

// https://drafts.csswg.org/css-align/#typedef-content-position
type ContentPosition = ['center', 'end', 'flex-end', 'flex-start', 'start'];

// https://drafts.csswg.org/css-flexbox-1/#propdef-flex
type Flex = ['1', 'none'];

// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction
type FlexDirection = ['column', 'column-reverse', 'row', 'row-reverse'];

// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap
type FlexWrap = ['nowrap', 'wrap', 'wrap-reverse'];

// https://drafts.csswg.org/css-align/#propdef-justify-content
type JustifyContent = ['left', 'right', ...ContentDistribution, ...ContentPosition];

// https://drafts.csswg.org/css-align/#propdef-justify-items
type JustifyItems = ['baseline', 'stretch', ...SelfPosition];

// https://drafts.csswg.org/css-align/#propdef-justify-self
type JustifySelf = ['auto', 'baseline', 'stretch', ...SelfPosition];

type MarginLeft = ['1/12', '10/12', '11/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', ...S];

type S = ['!1', '!2', '!3', '!4', '!5', '!6', '!7', '!8', '0', '1', '2', '3', '4', '5', '6', '7', '8', 'auto'];

// https://drafts.csswg.org/css-align/#typedef-self-position
type SelfPosition = ['center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start'];

type Width = [
  '0',
  '1/12',
  '10/12',
  '100',
  '11/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  'auto'
];

interface _1 {
  className?: EncodedClassName;
  m?: EncodedResponsiveClassName<S[number]>;
  mB?: EncodedResponsiveClassName<S[number]>;
  mL?: EncodedResponsiveClassName<MarginLeft[number]>;
  mR?: EncodedResponsiveClassName<S[number]>;
  mT?: EncodedResponsiveClassName<S[number]>;
  mX?: EncodedResponsiveClassName<S[number]>;
  mY?: EncodedResponsiveClassName<S[number]>;
  p?: EncodedResponsiveClassName<S[number]>;
  pB?: EncodedResponsiveClassName<S[number]>;
  pL?: EncodedResponsiveClassName<S[number]>;
  pR?: EncodedResponsiveClassName<S[number]>;
  pT?: EncodedResponsiveClassName<S[number]>;
  pX?: EncodedResponsiveClassName<S[number]>;
  pY?: EncodedResponsiveClassName<S[number]>;
  width?: EncodedResponsiveClassName<Width[number]>;
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
