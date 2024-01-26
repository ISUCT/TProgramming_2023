"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFib = void 0;
var productFib = function (prod) {
    var _a;
    var _b = [0, 1], Fn = _b[0], Fn1 = _b[1];
    while (Fn * Fn1 < prod) {
        _a = [Fn1, Fn + Fn1], Fn = _a[0], Fn1 = _a[1];
    }
    return [Fn, Fn1, Fn * Fn1 == prod];
};
exports.productFib = productFib;
console.log((0, exports.productFib)(714), "(21, 34, true)");
console.log((0, exports.productFib)(800), "(34, 55, false)");
