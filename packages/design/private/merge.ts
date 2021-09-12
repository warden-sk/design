/*
 * Copyright 2021 Marek Kobida
 */

function isObject(_1: any): boolean {
  return _1 !== null && typeof _1 === 'object';
}

function merge(target: any, ...sources: any[]): any {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }

        merge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return merge(target, ...sources);
}

export default merge;
