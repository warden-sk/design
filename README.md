1. [🇬🇧](./README.md)
1. [🇸🇰](./README.sk.md)
## supported attributes
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
***
## enhanced attribute `className`
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
> The `className` attribute is `string`.
>
> ```tsx
> <div className="active">👋</div>;
> ```
***
## how?
from `tsx`
```tsx
<div className={{ active: true }} pX={['1', { '#': '2' }]} pY={{ '#': '2' }}>
  👋
</div>;
```
to `ts`
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
rendered file `css`
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
rendered file `html`
```html
<div class="active p-x-1 #p-x-2 #p-y-2">👋</div>
```
