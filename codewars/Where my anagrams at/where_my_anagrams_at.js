function anagrams(word, words) {
    const sample = word.split('').sort().join('');
    const result = words.filter((anag) => anag.length === sample.length && anag.split('').sort().join('') === sample);
    return result;
  }