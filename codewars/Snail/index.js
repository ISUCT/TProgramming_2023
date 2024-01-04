snail = function(array) {
  const result = [];
  while (array.length > 0) {
    result.push(...array[0]);

    array.shift();

    //перевот матрицы на 90
    array = array[0] ? array[0].map((_, i) => array.map(row => row[i])).reverse() : [];
  }
  return result;
}

snail()