function moveZeros(arr) {
  const zeroes = [];
  const result = [];
  for (const item of arr) {
    if (item === 0) {
      zeroes.push(0);
    } else {
      result.push(item);
    }
  }
  for (const zero of zeroes) {
    result.push(zero);
  }
  return result;
}
