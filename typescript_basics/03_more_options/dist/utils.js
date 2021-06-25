"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatName = exports.add = void 0;
const add = (a, b) => {
    if (a > 0) {
        return a + b;
    }
    return '' + a + b;
};
exports.add = add;
// noUnusedParameters
const getCatName = (cat, notCat) => {
    return cat.name && cat.name.firstName;
};
exports.getCatName = getCatName;
