function getPermutationsWithoutDuplicates(string) {
    const result = [];
    // Проверка на непустую входную строку
    if (!string || typeof string !== 'string') {
      throw new Error('Invalid input. Please provide a non-empty string.');
    }
    function permute(str, prefix = '') {
      if (str.length === 1) {
        result.push(prefix + str);
        return;
      }
      
      for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        
        // Проверка на дубликаты
        if (str.indexOf(currentChar) !== i) {
          continue;
        }
        
        permute(remainingChars, prefix + currentChar);
      }
    }
    
    permute(string);
    
    // Удаление дубликатов
    const uniquePermutations = [...new Set(result)];
    
    return uniquePermutations;
  }
  
  // Пример использования
  const inputString1 = 'abc';
  const permutations = getPermutationsWithoutDuplicates(inputString1);
  console.log(permutations); 
