function permutations(array) {
    array = array.split("")
    const result = new Set();

    const indices = Array(array.length).fill(0);

    result.add([...array].join(""));

    let i = 0;
    while (i < array.length) {
        if (indices[i] < i) {
            if (i % 2 === 0) {
                [array[0], array[i]] = [array[i], array[0]];
            } else {
                [array[indices[i]], array[i]] = [array[i], array[indices[i]]];
            }

            result.add([...array].join(""));

            indices[i]++;
            i = 0;
        } else {
            indices[i] = 0;
            i++;
        }
    }

    return Array.from(result);
}

console.log(permutations("aabb"))