"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = void 0;
function duplicateEncode(word) {
    var charCount = {};
    word = word.toLowerCase();
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var i = word_1[_i];
        charCount[i] = (charCount[i] || 0) + 1;
    }
    return word.split('').map(function (i) {
        return charCount[i] === 1 ? '(' : ')';
    }).join('');
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode("din") == "(((");
console.log(duplicateEncode("recede") == "()()()");
console.log(duplicateEncode("Success") == ")())())");
console.log(duplicateEncode("(( @") == "))((");
