function duplicateEncode(word){

    word = word.toLowerCase();
    var newstr = "";
    var count = 0; 
    for (let i = 0; i < word.length; i++){
        count = 0
        for (let j = 0; j < word.length; j++){
            if (word[j] === word[i]){
                count ++
            }
        }   
        if (count > 1) {
            newstr += ")" 
        } else {
            newstr += "("
        }
    }
    return newstr 
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))