function checkWords(word1, word2) {
    const word1Set = new Set([...word1]);
    const word2Set = new Set([...word2]);
    return word1Set.size === word2Set.size && new Set([...word1Set, ...word2Set]).size === word1Set.size;
  }
  
  // Пример использования функции
  console.log(checkWords('hello', 'olelh')); 