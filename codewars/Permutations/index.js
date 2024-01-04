function permutations(string) {
  const strArr = string.split('')
  const resArr = new Set()

  function generatePermutations(arr, length) {
    if (length === 1) {
      resArr.add(arr.join(''))
    } else {
      for (let i = 0; i < length; i++) {
        generatePermutations(arr, length - 1)
        if (length % 2 === 0) {
          [arr[i], arr[length - 1]] = [arr[length - 1], arr[i]];
        } else {
          [arr[0], arr[length - 1]] = [arr[length - 1], arr[0]]
        }
      }
    }
  }

  generatePermutations(strArr, strArr.length)

  return Array.from(resArr)
}

permutations()