function deepCount(a) {
    let count = a.length;
    for (let i of a) { if (Array.isArray(i)) { count += deepCount(i) } }
    return count;
}


console.log(deepCount([]))
console.log(deepCount([1, 2, 3]))
console.log(deepCount(["x", "y", ["z"]]))
console.log(deepCount([1, 2, [3, 4, [5]]]))
console.log(deepCount([[[[]]]]))
// console.log([[[[[[[[[]]]]]]]]])