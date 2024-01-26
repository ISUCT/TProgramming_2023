export const towerBuilder = (nFloors: number): string[] => {
    let tower = [];
    let lastFloor = (nFloors - 1) * 2 + 1;
    let space = 0;
    for (let i = 0; i < nFloors; i++) {
        let floor = " ".repeat(space) + "*".repeat(lastFloor) + " ".repeat(space)
        tower.push(floor)
        space++
        lastFloor -= 2
    }

    return tower.reverse();
}

console.log(towerBuilder(3))
console.log(towerBuilder(6))