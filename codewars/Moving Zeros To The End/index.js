function moveZeros (arr) {
    for (let count = arr.length - 1; count >= 0; count--) {
      if (arr[count] === 0) {
        arr.splice(count, 1);
        arr.push(0);
      }
    }
    return arr;
}