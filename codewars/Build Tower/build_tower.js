function towerBuilder(nFloors) {
    let tower = []
    for (let i = 0; i < nFloors; i++){
        let floor = "";
        for (let spacers = 0; spacers < (nFloors - 1 - i); spacers++){
            floor += " "
        }
        for (let stars = 0; stars < (1 + i * 2); stars++){
            floor += "*"
        }
        for (let spacers2 = 0; spacers2 < (nFloors - 1 - i); spacers2++){
            floor += " "
        }
        tower.push(floor)
    }
    return tower
  }