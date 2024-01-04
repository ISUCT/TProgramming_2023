function duplicateEncode(word){
  const lowWord = word.toLowerCase()
  const charCountMap = new Map()

  let newStr = ""

  for (const char of lowWord) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  for (const char of lowWord) {
    if (charCountMap.get(char) === 1) {
      newStr += '(';
    } else {
      newStr += ')';
    }
  }

  return newStr;
}

duplicateEncode()