/*
 * Copyright 2021 Marek Kobida
 */

export interface Breakpoint {
  name: string;
  size: string;
}

const breakpoints: Breakpoint[] = [
  { name: '\\#', size: '40rem' },
  { name: '\\#\\#', size: '48rem' },
  { name: '\\#\\#\\#', size: '64rem' },
];

export default breakpoints;
