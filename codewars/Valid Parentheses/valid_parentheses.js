function validParentheses(parens) {
    if (parens[0] === ")" || parens.length % 2 !== 0) {
      return false;
    }
    const leftSymbols = [];
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        leftSymbols.push(parens[i]);
      }  else if (parens[i] === ')' && leftSymbols.length !== 0) {
        leftSymbols.pop();
      }  else {
        return false;
      }
    }
    return leftSymbols.length === 0;
  }