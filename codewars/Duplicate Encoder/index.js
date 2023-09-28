function duplicateEncode(word){
    let map = new Map();
    word = word.toLowerCase()
    str = ""
    for (let i = 0; i < word.length; i++) {
        count = 0
        for (let j = 0; j < word.length; j++) {
            if (word[i] === word[j]){
                count += 1;
            }
        }
        map.set(word[i], count);
    }


    
    for (let i = 0; i < word.length; i++) {
            if (map.get(word[i]) > 1 ){
                str += ")"
            } else {
                str += "("
            }
    }
    return str
            
}