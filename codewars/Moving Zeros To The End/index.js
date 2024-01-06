function moveZeros(array) {
    var zeroes = 0
    var res = [];
    for (let index = 0; index < array.length; index++) {
        //console.log(array[index])
        if (array[index] === 0) {
            zeroes++
        } else {
            res.push(array[index])
        }
        //console.log(res)
    }
    for (let index = 0; index < zeroes; index++) {
        res.push(0)
    }
    return res
}