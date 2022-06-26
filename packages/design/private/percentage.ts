/*
 * Copyright 2022 Marek Kobida
 */

function percentage(left: number, right: number): string {
  return ((left / right) * 100).toFixed(6).replace(/\.0+$/, '') + '%';
}

export default percentage;
