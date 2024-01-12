function pigIt(str) {

    var words = str.split(' ');
  
    function convertWord(word) {
      if (/^[A-Za-z]+$/.test(word)) {
        return word.slice(1) + word[0] + 'ay';
      } else {
        return word;
      }
    }
  
    var pigLatinWords = words.map(convertWord);

    var pigLatinStr = pigLatinWords.join(' ');
  
    return pigLatinStr;
  }