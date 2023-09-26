function add(a, b) {
    if (a.length <= b.length) {
        var small = a
        var big = b
    } else {
        var big = a
        var small = b
    }
    var tens = 0
    var result = ""
    for (let index = 0; index < big.length; index++) {
        let num
        if (/^[1-9]/.test(small[small.length - index - 1])) {
            num = Number(big[big.length - index - 1]) + Number(small[small.length - index - 1]) + tens
        } else{
            num = Number(big[big.length - index - 1]) + tens
        }
        console.log(small[small.length - index - 1], big[big.length - index - 1], tens)
        if (num > 9) {
            tens = 1
        } else{
            tens = 0
        }
        result = (num % 10).toString() + result
    }
    if (tens > 0) {
        result = tens.toString() + result
    }
    return result;
}