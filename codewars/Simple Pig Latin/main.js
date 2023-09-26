"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
var pigIt = function (a) {
    var words = a.split(' ');
    var pigLatinWords = words.map(function (word) {
        var hasOnlyLetters = /^[A-Za-z]+$/.test(word);
        if (hasOnlyLetters) {
            var pigLatinWord = word.substring(1) + word[0] + 'ay';
            return pigLatinWord;
        }
        else {
            return word;
        }
    });
    return pigLatinWords.join(' ');
};
exports.pigIt = pigIt;
console.log((0, exports.pigIt)('Pig latin is cool'));
console.log((0, exports.pigIt)('Hello world !'));
