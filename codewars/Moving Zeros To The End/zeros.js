function moveZerosToEnd(arr) {
    let zeros = []; 
    const nonZeros = arr.filter((element) => {  
      if (element === 0) {   
        zeros.push(element);
        return false; 
      }
      return true; 
    });
  
    return nonZeros.concat(zeros); 
  }
  
  // Пример использования:
  
  const inputArray = [false, 0, 1, "hello", 0, 3, "world"];
  const resultArray = moveZerosToEnd(inputArray);
  console.log(resultArray); 