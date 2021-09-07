from

```tsx
<div pX={1} pY={2}>design</div>
```

to

```ts
import decodeClassName from "@warden-sk/babel-plugin/private/helpers/decodeClassName";
import decodeResponsiveClassName from "@warden-sk/babel-plugin/private/helpers/decodeResponsiveClassName";
React.createElement("div", {
  className: decodeClassName([decodeResponsiveClassName("p-x-", 1), decodeResponsiveClassName("p-y-", 2)])
}, "design");
```
