## jednoduchá ukážka

z `tsx`

```tsx
<div className={{red: true}} id="test" pX="1" pY="2">
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
        red: true,
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
<div id="test" class="red p-x-1 p-y-2">👋</div>
```
