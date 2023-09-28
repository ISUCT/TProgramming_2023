function sumPairs(ints, s) {
    if (ints.length<2) return undefined
    let set = new Set()
    for (let i = 0; i < ints.length; i++) {
        let num = s-ints[i];
        if (set.has(num)) {
            return [num, ints[i]]
        }
        set.add(ints[i]);
    }
    return undefined

}