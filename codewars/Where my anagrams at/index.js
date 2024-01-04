function anagrams(word, words) {
  const wordArr = word.split("")
  const resArr = []

  for (i = 0; i < words.length; i++) {

    if (wordArr.sort().join('') === words[i].split('').sort().join('')) {
      resArr.push(words[i])
    }
  }

  return resArr
}

anagrams()