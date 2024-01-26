export const pigIt = (a: string): string => {
    const words = a.split(' ');

    const pigLatinWords = words.map(word => {
        const hasOnlyLetters = /^[A-Za-z]+$/.test(word);

        if (hasOnlyLetters) {
            const pigLatinWord = word.substring(1) + word[0] + 'ay';
            return pigLatinWord;
        } else {
            return word;
        }
    });

    return pigLatinWords.join(' ');
}

// Лучшее решение
// export const pigIt = (a : string) => a.replace(/(\w)(\w+)*/g, "$2$1ay")

// // do first letter (group 1) do rest of letters of word (group 2) 
// // note : spaces are not in it
// // do it for all words 

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))