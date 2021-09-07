## čo je podporované?

1. babel
2. react
3. [rozšírený atribút `className`](#rozšírený-atribút-classname)
4. typescript

### rozšírený atribút `className`

```ts
type EncodedClassName =
  | EncodedClassName[]
  | boolean
  | null
  | number
  | string
  | undefined
  | { [decodedClassName: string]: boolean | null | undefined }; // v jednoduchej ukážke
```

## jednoduchá ukážka

z `tsx`

```tsx
<div className={{ active: true }} id="test" pX="1" pY="2">
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
      {
        active: true,
      },
      decodeResponsiveClassName('p-x-', '1'),
      decodeResponsiveClassName('p-y-', '2'),
    ]),
    id: 'test',
  },
  '👋'
);
```

alebo do `html`

```html
<div id="test" class="active p-x-1 p-y-2">👋</div>
```
