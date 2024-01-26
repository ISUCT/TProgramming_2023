"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
var digitalRoot = function (n) {
    var summ;
    while (n > 9) {
        summ = 0;
        for (var _i = 0, _a = String(n).split(""); _i < _a.length; _i++) {
            var i = _a[_i];
            summ += Number(i);
        }
        n = summ;
    }
    return n;
};
exports.digitalRoot = digitalRoot;
console.log((0, exports.digitalRoot)(493193));
// Популярное решение на сайте
/*

export function digitalRoot(n: number): number {
  return (n - 1) % 9 + 1;
}

*/ 
