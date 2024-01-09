function anagramDifference(w1, w2) {
    // Подсчитайте частоту употребления каждой буквы в обоих словах
    const frequency1 = countLetterFrequency(w1.split(''));
    const frequency2 = countLetterFrequency(w2.split(''));

    let count = 0;

    // Посчитать разницу в частоте букв
    for (let letter in frequency1) {
        if (frequency1.hasOwnProperty(letter)) {
            const diff = Math.abs(frequency1[letter] - (frequency2[letter] || 0));
            count += diff;
        }
    }

    // Добавьте лишние буквы во второе слово
    for (let letter in frequency2) {
        if (frequency2.hasOwnProperty(letter) && !frequency1.hasOwnProperty(letter)) {
            count += frequency2[letter];
        }
    }

    return count;
}

function countLetterFrequency(word) {
    // Посчитать как часто встречается буква в слове
    const frequency = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        frequency[letter] = frequency[letter] ? frequency[letter] + 1 : 1;
    }

    return frequency;
}


console.log(anagramDifference("", ""), 0)
console.log(anagramDifference("a", ""), 1)
console.log(anagramDifference("", "a"), 1)
console.log(anagramDifference("ab", "a"), 1)