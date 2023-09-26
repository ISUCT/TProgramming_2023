function moveZeros(arr) {
    let zeros = 0;
    let newarr = [];
    for (i in arr) {
        if (arr[i] !== 0) {
            newarr.push(arr[i]);
        } else {
            zeros++;
        }
    }
    for (let i = 0; i < zeros; i++) { newarr.push(0) }
    return newarr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));