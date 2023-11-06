function duplicateEncode(word){
  word = word.toLowerCase();
  
  var count = {};
  

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    count[char] = count[char] ? count[char] + 1 : 1;
  }
  
  var result = '';
  
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    
    result += count[char] === 1 ? '(' : ')';
  }
  
  return result;
}
