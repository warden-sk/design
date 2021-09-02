/*
 * Copyright 2021 Marek Kobida
 */

export interface Size {
  name: string;
  size: string;
}

const sizes: Size[] = [
  { name: '0', size: '0' },
  { name: '1', size: '0.25rem' },
  { name: '2', size: '0.5rem' },
  { name: '3', size: '0.75rem' },
  { name: '4', size: '1rem' },
  { name: '5', size: '1.25rem' },
  { name: '6', size: '1.5rem' },
  { name: '7', size: '1.75rem' },
  { name: '8', size: '2rem' },
];

export default sizes;
