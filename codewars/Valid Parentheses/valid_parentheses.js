function validParentheses(parens) {
    let state = 0
    for (i = 0; i < parens.length; i++){
        if (parens[i] == '('){
            state++
        } else {
            state--
        }
    }
    if (state == 0){
        return true
    }
    return false
  }