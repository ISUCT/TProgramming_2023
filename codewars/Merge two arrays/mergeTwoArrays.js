var a = ['a', 'b', 'c', 'd', 'e']

var b = [1, 2, 3, 4, 5]

function mergeArray(a, b) {

    var res = []
    var biggestLengthOfArray = 0
    if (a.length > b.length){
        biggestLengthOfArray = a.length
    } else if (a.length == b.length){
        biggestLengthOfArray = b.length
    }  else {
        biggestLengthOfArray = b.length 
    }

    for (var i = 0; i < biggestLengthOfArray; i++) {
        if (a[i] !== undefined) res.push(a[i])
        if (b[i] !== undefined) res.push(b[i])
    }

    return res
}


console.log(mergeArray(a, b))