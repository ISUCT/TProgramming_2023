function anagramDifference(firstWord, secondWord){
    var sameLetters = 0;
    var array = {};
    if (firstWord.length >= secondWord.length){
        var bigWord = firstWord
        var smallWord = secondWord
    } else{
      var bigWord = secondWord
      var smallWord = firstWord
    }
    var sameLetters = bigWord.length;

    for (let index = 0; index < bigWord.length; index++) {
        if (array[bigWord[index]] == null){
          array[bigWord[index]] = 1
        } else{
        array[bigWord[index]] += 1}
    }
    for (let index = 0; index < smallWord.length; index++) {
      if (array[smallWord[index]] != null && array[smallWord[index]] != 0){
        array[smallWord[index]]--
      }
    }
    for (let index = 0; index < bigWord.length; index++) {
      sameLetters = sameLetters - array[bigWord[index]]
      array[bigWord[index]] = 0
    }
    return bigWord.length + smallWord.length - (sameLetters * 2)
}