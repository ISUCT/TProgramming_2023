export function findMissingLetter(array: string[]): string {
    for (let i = array[0].charCodeAt(0); i < array[array.length - 1].charCodeAt(0); i++) {
        if (array.indexOf(String.fromCharCode(i)) == -1) {
            return String.fromCharCode(i);
        }
    }
    return "";
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));