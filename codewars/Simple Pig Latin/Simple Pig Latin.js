function pigIt(str) {
    let words = str.split(' ');
    let piggedWords = words.map(word => {
       if (/^[aeiou]/i.test(word)) {
         return word + 'ay';
       } else {
         return word.slice(1) + word.charAt(0) + 'ay';
       }
    });
    return piggedWords.join(' ');
   }