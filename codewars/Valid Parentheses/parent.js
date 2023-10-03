function validParentheses(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === '(' ) {
        stack.push(char); 
      } else if (char === ')') {
        if (stack.length === 0) {
          return false; // если стек пуст, то закрывающая скобка не имеет открывающей скобки
        }
        stack.pop(); 
      }
    }
  
    return stack.length === 0; 
  }

  //Пример использования: 
  console.log(validParentheses("()")); // true