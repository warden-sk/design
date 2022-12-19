/*
 * Copyright 2022 Marek Kobida
 */

import * as $ from '@babel/core';

const output = $.transformFileSync('./test.tsx', {
  plugins: ['@warden-sk'],
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
});

console.log(output?.code);
