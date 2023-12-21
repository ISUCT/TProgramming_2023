function towerBuilder(nFloor){
    var towerArray = []
    for (var i = 0; i < nFloor; i++){
        var star = "*".repeat(1 + i * 2)
        var space = " ".repeat(nFloor - i - 1)
        var floor = space + star + space

        towerArray.push(floor)
    }
    return towerArray
}

console.log()