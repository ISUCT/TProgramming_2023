export function duplicateEncode(word: string) {
    const charCount: { [key: string]: number } = {};

    word = word.toLowerCase();

    for (const i of word) {
        charCount[i] = (charCount[i] || 0) + 1;
    }

    return word.split('').map((i: string) => {
        return charCount[i] === 1 ? '(' : ')';
    }).join('');
}

console.log(duplicateEncode("din") == "(((");
console.log(duplicateEncode("recede") == "()()()");
console.log(duplicateEncode("Success") == ")())())");
console.log(duplicateEncode("(( @") == "))((");