/*
 * Copyright 2022 Marek Kobida
 */

function percentage(l: number, r: number): string {
  return ((l / r) * 100).toFixed(6).replace(/\.0+$/, '') + '%';
}

export default percentage;
