function sumPairs(numbers, targetSum) {
    const map = new Map(); // используем Map для хранения чисел и их индексов
    
    for (let i = 0; i < numbers.length; i++) {
      const complement = targetSum - numbers[i]; 
      
      if (map.has(complement)) { 
        const complementIndex = map.get(complement); 
        return [complement, numbers[i]]; 
      }
      
      map.set(numbers[i], i); 
    }
    
  }
