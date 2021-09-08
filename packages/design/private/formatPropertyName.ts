/*
 * Copyright 2021 Marek Kobida
 */

function formatPropertyName(propertyName: string): string {
  return propertyName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}

export default formatPropertyName;
