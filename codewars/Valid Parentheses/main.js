function validParentheses(parens) {
    const stack = [];
    for (const i of parens) {
        if (i == "(") {
            stack.push(1);
        } else {
            if (!stack.pop()) {
                return false
            }
        }
    }

    return stack == false ? true : false;
}

console.log(validParentheses("()"))
console.log(validParentheses(")(()))"))
console.log(validParentheses("("))
console.log(validParentheses("(())((()())())"))