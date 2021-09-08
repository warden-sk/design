"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function formatPropertyName(propertyName) {
    return propertyName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}
exports.default = formatPropertyName;
