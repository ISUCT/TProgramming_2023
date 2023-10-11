function duplicateEncode(word){

    let map = new Map()
    word = word.toLowerCase()
    result = ""

    for (let count = 0; count < word.length; count++) {
        if (map.get(word[count]) == undefined){
            map.set(word[count], 1)
        } else {
            map.set(word[count], map.get(word[count]) + 1)
        }
    }

    for (let index = 0; index < word.length; index++) {
        if (map.get(word[index]) > 1 ){
            result += ")"
        } else {
            result += "("
        }
        
    }
    return result;
}