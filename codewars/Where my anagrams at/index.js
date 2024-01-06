function anagrams(word, words) {
    var res = [];
    word = word.split("").sort().join("");
    for (let i = 0; i < words.length; i++){
      if (word === words[i].split("").sort().join("")){
        res.push(words[i])
      }
    }
    return res
  }