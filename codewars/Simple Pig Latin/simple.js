function modifyString(input) {
    const words = input.split(' ');
    const modifiedWords = words.map(word => {
      const firstLetter = word.charAt(0);
      const restOfWord = word.slice(1);
      const modifiedWord = restOfWord + firstLetter + 'ау';
      return modifiedWord;
    });
    const result = modifiedWords.join(' \t');
    return result;
  }
  
  // Пример использования
  const inputString12 = 'привет всем';
  const modifiedString = modifyString(inputString12);
  console.log(modifiedString);
  