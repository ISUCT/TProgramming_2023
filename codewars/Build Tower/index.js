function towerBuilder(nFloors) {

    let array = []
    for (count = 0; count < nFloors; count++){
        let repeat = nFloors - count - 1
        array.push(" ".repeat(repeat) + "*".repeat(1 + 2 * count) + " ".repeat(repeat))
    }
    return array;
}
console.log(towerBuilder(6));