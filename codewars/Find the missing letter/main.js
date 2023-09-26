"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMissingLetter = void 0;
function findMissingLetter(array) {
    for (var i = array[0].charCodeAt(0); i < array[array.length - 1].charCodeAt(0); i++) {
        if (array.indexOf(String.fromCharCode(i)) == -1) {
            return String.fromCharCode(i);
        }
    }
    return "";
}
exports.findMissingLetter = findMissingLetter;
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
