function permutations(string) {

    let result = [];
    if (string.length < 2) return [string];

    const noRepeat = (array) => {
        let set = new Set(array);
        return [...set];
    }

    for (let count = 0; count < string.length; count++){
        let path = string.slice(0, count) + string.slice (count+1, string.length)
        for(let item of permutations(path)){
            result.push([string[count], item].join(""))
        }
    }
    return noRepeat(result)
}