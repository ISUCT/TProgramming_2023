function validParentheses(parens) {
    const stack = [];
   
    for (let i = 0; i < parens.length; i++) {
       if (parens[i] === '(') {
         stack.push(parens[i]);
       }
   
       else if (parens[i] === ')') {
         if (stack.length === 0) {
           return false;
         }
   
         if (stack[stack.length - 1] === '(') {
           stack.pop();
         }
   
         else {
           return false;
         }
       }
    }
   
    if (stack.length !== 0) {
       return false;
    }
   
    return true;
   }