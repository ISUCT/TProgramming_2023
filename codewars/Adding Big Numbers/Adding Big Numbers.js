function add(num1, num2) {
    let res = "";
    let carry = 0;
    let len1 = num1.length, len2 = num2.length;
    let i = len1 - 1, j = len2 - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = (i >= 0 ? parseInt(num1[i]) : 0) +
                 (j >= 0 ? parseInt(num2[j]) : 0) +
                 carry;
        carry = Math.floor(sum / 10);
        res = (sum % 10) + res;
        i--; j--;
    }
    return res;
}