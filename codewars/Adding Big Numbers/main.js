function add(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? Number(a[i]) : 0;
        const digit2 = j >= 0 ? Number(b[j]) : 0;
        const sum = digit1 + digit2 + carry;
        const digitSum = sum % 10;
        carry = Math.floor(sum / 10);
        result = digitSum.toString() + result;
        i--; j--;
    }
    return result;
}

console.log(add("123", "321"))
console.log(add("11", "99"))
console.log(add("1", "1"), "2")
console.log(add("123", "456"), "579")
console.log(add("888", "222"), "1110")
console.log(add("1372", "69"), "1441")
console.log(add("12", "456"), "468")
console.log(add('63829983432984289347293874', '90938498237058927340892374089') == "91002328220491911630239667963")