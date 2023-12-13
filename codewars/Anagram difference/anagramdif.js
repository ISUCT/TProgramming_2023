function getSumOfDeletedLetters(word1, word2) {
    // второе слово в обратный порядок
    const reversedWord2 = word2.split('').reverse().join('');
    let sum = 0;
    // по каждой букве первого слова
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== reversedWord2[i]) {
        sum++;
      }
    }
    
    return sum;
  }
  
  // Пример использования
  const word1 = 'code wars';
  const word2 = 'hack er rank';
  const result1 = getSumOfDeletedLetters(word1, word2);
  console.log(result1); 