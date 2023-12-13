function countElements(arr) {
    let count = 0;
  
    function countRecursive(subArr) {
      for (let i = 0; i < subArr.length; i++) {
        if (Array.isArray(subArr[i])) {
          countRecursive(subArr[i]);
        } else {
          count++;
        }
      }
    }
  
    countRecursive(arr);
  
    return count;
  }
  
  // Пример использования
  const array = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
  console.log(countElements(array)); // Output: 9