function mergeArrays(a, b) {

    let array = [];
    let maxLen = a.length > b.length? a.length: b.length;

    for (count = 0; count < maxLen; count++){
        if (a[count] === undefined) array.push(b[count])
        else if (b[count] === undefined) array.push(a[count])
        else array.push(a[count], b[count])
    }
    return array
}