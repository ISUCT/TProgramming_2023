function mergeArrays(numbers, letters) {
    const mergedArray = [];
    const maxLength = Math.max(numbers.length, letters.length);
    for (let i = 0; i < maxLength; i++) {
      // Если есть элемент в числовом массиве на данной позиции, добавляем его в объединенный массив
      if (i < numbers.length) {
        mergedArray.push(numbers[i]);
      }
  
      // Если есть элемент в массиве с буквами на данной позиции, добавляем его в объединенный массив
      if (i < letters.length) {
        mergedArray.push(letters[i]);
      }
    }
  
    return mergedArray;
  }
  
  // Пример использования
  const numbers = [1, 2, 3, 4, 5];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  
  const mergedArray = mergeArrays(numbers, letters);
  console.log(mergedArray); 