function duplicateEncode(word){
    let res = '';
    let str = word.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
        res += '(';
      } else {
        res += ')';
      }
    }
    return res;
  }