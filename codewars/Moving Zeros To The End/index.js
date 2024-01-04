function moveZeros(arr) {
  let nonZeroElements = [];
  let zeroElements = [];

  for (let element of arr) {
    if (element === 0) {
      zeroElements.push(element);
    } else {
      nonZeroElements.push(element);
    }
  }

  return nonZeroElements.concat(zeroElements);
}

moveZeros()