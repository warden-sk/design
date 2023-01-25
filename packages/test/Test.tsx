/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

const isActive = true;

export function Test() {
  return <div p={isActive && '2'}>Test</div>;
}

export function Test1({ className }: JSX.IntrinsicElements['div']) {
  return (
    <div className={[className, 'Test1']} p="2">
      Test1
    </div>
  );
}

export function Test2($: JSX.IntrinsicElements['div']) {
  return (
    <div {...$} className="Test2" p="2">
      Test2
    </div>
  );
}

export function Test3({ className, ...$ }: JSX.IntrinsicElements['div']) {
  return (
    <div {...$} className={[className, 'Test3']} p="2">
      Test3
    </div>
  );
}
