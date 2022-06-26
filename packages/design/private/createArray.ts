/*
 * Copyright 2022 Marek Kobida
 */

function createArray(length: number): number[] {
  const $ = [];

  for (let i = 0; i < length; i++) {
    $[i] = i;
  }

  return $;
}

export default createArray;
