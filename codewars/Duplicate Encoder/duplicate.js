function transformString(str) {
    let lowerCaseStr = str.toLowerCase(); 
    let result = ""; 
    for (let i = 0; i < lowerCaseStr.length; i++) {
      let currentChar = lowerCaseStr[i];
      let count = lowerCaseStr.split(currentChar).length - 1;
      if (count === 1) {
        result += "(";
      } else {
        result += ")";
      }
    }
    return result;
  }
  
  // Пример использования:
  let inputString = "din";
  let transformedString = transformString(inputString);
  console.log(transformedString); 
