function snail(arr) {
    const n = arr.length;
    const result = [];
    if (n !== arr[0].length) {
      return null;
    }
    let row = 0, col = 0;
    let count = n;
    while (count > 0) {
      for (let i = 0; i < count; i++) {
        result.push(arr[row][col++]);
      }
      col--;
      row++;
      for (let i = 0; i < count - 1; i++) {
        result.push(arr[row++][col]);
      }
      row--;
      col--;
      for (let i = 0; i < count - 1; i++) {
        result.push(arr[row][col--]);
      }
      col++;
      row--;
      for (let i = 0; i < count - 2; i++) {
        result.push(arr[row--][col]);
      }
      row++;
      col++;
      count -= 2;
    }
    return result;
  }