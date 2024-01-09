"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumPairs = void 0;
function sumPairs(ints, s) {
    var seenNumbers = new Set();
    for (var _i = 0, ints_1 = ints; _i < ints_1.length; _i++) {
        var num = ints_1[_i];
        var complement = s - num;
        if (seenNumbers.has(complement)) {
            return [complement, num];
        }
        seenNumbers.add(num);
    }
    return undefined;
}
exports.sumPairs = sumPairs;
console.log(sumPairs([11, 3, 7, 5], 10), "/ [3, 7]");
console.log(sumPairs([4, 3, 2, 3, 4], 6), "/ [4, 2]");
console.log(sumPairs([0, 0, -2, 3], 2), "/ undefined");
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), "/ [3, 7]");
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), "/ [1, 7]");
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), "/ [0, -6]");
console.log(sumPairs([0, 2, 0], 0), "/ [0, 0]");
