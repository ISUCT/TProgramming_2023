function recursiveSum(num) {
    if (num < 10) {
      return num;
    }
    let digitsSum = 0;
    while (num > 0) {
      digitsSum += num % 10;
      num = Math.floor(num / 10);
    }
    return recursiveSum(digitsSum);
  }
  
  // Пример использования
  const number = 123456789;
  const result = recursiveSum(number);
  console.log("Рекурсивная сумма числа", number, "до однозначного значения равна", result);
  