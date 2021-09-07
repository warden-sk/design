## jednoduchá ukážka

z `tsx`

```tsx
<div pX={1} pY={2}>👋</div>
```

do `ts`

```ts
import decodeClassName from '@warden-sk/babel-plugin/private/helpers/decodeClassName';
import decodeResponsiveClassName from '@warden-sk/babel-plugin/private/helpers/decodeResponsiveClassName';
React.createElement(
  'div',
  {
    className: decodeClassName([
      decodeResponsiveClassName('p-x-', 1),
      decodeResponsiveClassName('p-y-', 2),
    ]),
  },
  '👋'
);
```

alebo do `html`

```html
<div class="p-x-1 p-y-2">👋</div>
```
