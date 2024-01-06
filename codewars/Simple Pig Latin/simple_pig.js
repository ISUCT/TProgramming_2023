function pigIt(str){
    
    let words = str.split(' ')
    for (i = 0; i < words.length; i++){
        words[i] = words[i].slice(1, words[i].length) + words[i][0] + 'ay' 
    }
    return words.join(' ')
  }

