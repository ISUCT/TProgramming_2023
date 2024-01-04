function anagramDifference(w1,w2){
  const charCount = {}
  let deletedCount = 0

  for (const char of w1) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (const char of w2) {
    if (!charCount[char]) {
      deletedCount++
    } else {
      charCount[char]--
    }
  }

  for (const char in charCount) {
    deletedCount += charCount[char]
  }

  return deletedCount
}

anagramDifference()