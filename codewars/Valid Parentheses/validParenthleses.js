function validParentheses(parens) {
    var count = 0
    for (i = 0; i < parens.length; i++){
        if (parens[i] == '('){
            count++
        } else {
            count--
        }
    }
    if (count == 0){
        return true
    }
    return false
  }