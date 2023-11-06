function sumPairs(arr, target) {
  let indices = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (indices.has(complement)) {
      return [complement, arr[i]];
    }

    indices.set(arr[i], i);
  }

  return undefined;
}
