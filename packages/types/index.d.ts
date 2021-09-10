// Type definitions for @warden-sk/babel-plugin
// Project: https://github.com/warden-sk/design
// Definitions by: Marek Kobida <https://github.com/marekkobida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'react';
import * as t from './types';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/decodeResponsiveClassName';

interface A {
  alignContent?: EncodedResponsiveClassName<typeof t.AlignContent[number]>;
  alignItems?: EncodedResponsiveClassName<typeof t.AlignItems[number]>;
  alignSelf?: EncodedResponsiveClassName<typeof t.AlignSelf[number]>;
  className?: EncodedClassName;
  display?: EncodedResponsiveClassName<typeof t.Display[number]>;
  flex?: EncodedResponsiveClassName<typeof t.Flex[number]>;
  flexDirection?: EncodedResponsiveClassName<typeof t.FlexDirection[number]>;
  flexWrap?: EncodedResponsiveClassName<typeof t.FlexWrap[number]>;
  justifyContent?: EncodedResponsiveClassName<typeof t.JustifyContent[number]>;
  justifyItems?: EncodedResponsiveClassName<typeof t.JustifyItems[number]>;
  justifySelf?: EncodedResponsiveClassName<typeof t.JustifySelf[number]>;
  m?: EncodedResponsiveClassName<typeof t.S[number]>;
  mB?: EncodedResponsiveClassName<typeof t.S[number]>;
  mL?: EncodedResponsiveClassName<typeof t.MarginLeft[number]>;
  mR?: EncodedResponsiveClassName<typeof t.S[number]>;
  mT?: EncodedResponsiveClassName<typeof t.S[number]>;
  mX?: EncodedResponsiveClassName<typeof t.S[number]>;
  mY?: EncodedResponsiveClassName<typeof t.S[number]>;
  p?: EncodedResponsiveClassName<typeof t.S[number]>;
  pB?: EncodedResponsiveClassName<typeof t.S[number]>;
  pL?: EncodedResponsiveClassName<typeof t.S[number]>;
  pR?: EncodedResponsiveClassName<typeof t.S[number]>;
  pT?: EncodedResponsiveClassName<typeof t.S[number]>;
  pX?: EncodedResponsiveClassName<typeof t.S[number]>;
  pY?: EncodedResponsiveClassName<typeof t.S[number]>;
  width?: EncodedResponsiveClassName<typeof t.Width[number]>;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | A;
      abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement> | A;
      article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> | A;
      b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement> | A;
      bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement> | A;
      body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement> | A;
      br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement> | A;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | A;
      canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> | A;
      caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | A;
      colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | A;
      data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement> | A;
      datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement> | A;
      dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement> | A;
      details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement> | A;
      dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> | A;
      dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement> | A;
      dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement> | A;
      fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> | A;
      figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> | A;
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> | A;
      header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement> | A;
      html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> | A;
      i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> | A;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | A;
      input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | A;
      ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement> | A;
      kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> | A;
      legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> | A;
      li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> | A;
      link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> | A;
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement> | A;
      mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement> | A;
      meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement> | A;
      meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement> | A;
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement> | A;
      ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> | A;
      optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement> | A;
      option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> | A;
      output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement> | A;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> | A;
      param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement> | A;
      picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> | A;
      progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement> | A;
      q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> | A;
      rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> | A;
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> | A;
      slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement> | A;
      small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement> | A;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> | A;
      strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> | A;
      sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> | A;
      tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | A;
      td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> | A;
      template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement> | A;
      textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> | A;
      tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | A;
      th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> | A;
      thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | A;
      time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement> | A;
      title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> | A;
      tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> | A;
      track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement> | A;
      u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> | A;
      var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
      video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> | A;
      wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | A;
    }
  }
}
