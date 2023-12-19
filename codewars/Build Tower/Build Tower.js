function towerBuilder(nFloors) {
    let tower = [];

    for (let i = 0; i < nFloors; i++) {
        let row = " ".repeat(nFloors - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(nFloors - i - 1);
        tower.push(row);
    }

    return tower;
}