function validParentheses(parens) {

    let arr = [];
    if (parens.length % 2 == 1) return false

    for (count = 0; count < parens.length; count++){
        if (parens[count] == "("){
            arr.push(parens[count])
        } else if (parens[count] == ")" && arr.length == 0){
            arr.shift()
        } 
    }
    if (arr.length != 0){
        return false
    } else return true
}