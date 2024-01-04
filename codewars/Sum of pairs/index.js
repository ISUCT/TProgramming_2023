function sumPairs(ints, s) {
  const numIndex = {};

  for (let i = 0; i < ints.length; i++) {
    const currentNum = ints[i]
    const numPair = s - currentNum

    if (numIndex.hasOwnProperty(numPair)) {
      return [numPair, currentNum]
    }

    if (!numIndex.hasOwnProperty(currentNum)) {
      numIndex[currentNum] = i
    }
  }

  return undefined
}

sumPairs()