function duplicateEncode(word) {
    const lowerCaseWord = word.toLowerCase();
    let result = '';
   
    for (let i = 0; i < lowerCaseWord.length; i++) {
       if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
         result += '(';
       } else {
         result += ')';
       }
    }
   
    return result;
   }