/*
 * Copyright 2021 Marek Kobida
 */

// @ts-ignore
function o(t, ...e) {
  for (const f of e)
    for (const e in f) {
      const n = f[e],
        c = t[e];
      t[e] = 'object' !== typeof n || 'object' !== typeof c ? n : o(c, n);
    }
  return t;
}

export default o;
