## čo je podporované?

1. [babel](./packages/babel-plugin)
1. [rozšírený atribút `className`](#rozšírený-atribút-classname)
1. [typescript](./packages/types)

***

### rozšírený atribút `className`

```ts
type EncodedClassName =
  | EncodedClassName[]
  | boolean
  | null
  | number
  | string
  | undefined
  | { [decodedClassName: string]: boolean | null | undefined }; // v ukážke
```

> Atribút `className` je štandardne `string`.
>
> ```tsx
> <div className="active">👋</div>; // bez rozšírenia
> ```

***

## ukážka

z `tsx`

```tsx
<div
  className={{ active: true }}
  id="test"
  pX={['1', { '#': '2' }]}
  pY={{ '#': '2' }}
>
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
      decodeResponsiveClassName('p-x-', [
        '1',
        {
          '#': '2',
        },
      ]),
      decodeResponsiveClassName('p-y-', {
        '#': '2',
      }),
    ]),
    id: 'test',
  },
  '👋'
);
```

alebo do `html`

```html
<div id="test" class="active p-x-1 #p-x-2 #p-y-2">👋</div>
```

použité `css`

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

***

## funkcia `decodeClassName`

***

## funkcia `decodeResponsiveClassName`
