function validParentheses(parens) {
    let res = [];
    res.push(parens[0])
    for (let i = 1; i < parens.length; i++){
      if (res[res.length - 1] == "(" && parens[i] == ")"){
        res.splice(0,1)
      } else {
        res.push(parens[i])
      }
    }
    console.log(res)
    if (res.length == 0 || res[0] == undefined){
      return true
    } else{
    return false;
    }
  }