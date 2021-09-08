<p align="center">
  <a href="./README.md">🇬🇧</a>
  <a href="./README.sk.md">🇸🇰</a>
</p>

## podporované atribúty
```json
[
  "alignContent",
  "alignItems",
  "alignSelf",
  "display",
  "flex",
  "flexDirection",
  "flexWrap",
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "m",
  "mB",
  "mL",
  "mR",
  "mT",
  "mX",
  "mY",
  "p",
  "pB",
  "pL",
  "pR",
  "pT",
  "pX",
  "pY",
  "width"
]
```
## rozšírený atribút `className`
```ts
type EncodedClassName =
  | EncodedClassName[]
  | boolean
  | null
  | number
  | string
  | undefined
  | { [decodedClassName: string]: boolean | null | undefined };
```
> Atribút `className` je štandardne `string`.
> ```tsx
> <div className="active">👋</div>;
> ```
## ✏️
z `tsx`
```tsx
<div className={{ active: true }} pX={['1', { '#': '2' }]} pY={{ '#': '2' }}>
  👋
</div>;
```
do `ts`
```ts
import decodeClassName from '@warden-sk/babel-plugin/private/helpers/decodeClassName';
import decodeResponsiveClassName from '@warden-sk/babel-plugin/private/helpers/decodeResponsiveClassName';
React.createElement(
  'div',
  {
    className: decodeClassName([
      { active: true },
      decodeResponsiveClassName('p-x-', ['1', { '#': '2' }]),
      decodeResponsiveClassName('p-y-', { '#': '2' }),
    ]),
  },
  '👋'
);
```
vykreslený súbor `css`
```css
.p-l-1,
.p-x-1 {
  padding-left: 0.25rem !important;
}
.p-r-1,
.p-x-1 {
  padding-right: 0.25rem !important;
}
@media (min-width: 40rem) {
  .\#p-b-2,
  .\#p-y-2 {
    padding-bottom: 0.5rem !important;
  }
  .\#p-l-2,
  .\#p-x-2 {
    padding-left: 0.5rem !important;
  }
  .\#p-r-2,
  .\#p-x-2 {
    padding-right: 0.5rem !important;
  }
  .\#p-t-2,
  .\#p-y-2 {
    padding-top: 0.5rem !important;
  }
}
```
vykreslený súbor `html`
```html
<div class="active p-x-1 #p-x-2 #p-y-2">👋</div>
```
