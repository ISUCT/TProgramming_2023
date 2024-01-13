function towerBuilder(nFloors) {
    let floors = [];
    let result = [];
   
    for (let i = nFloors; i > 0; i--) {
       let spaces = i - 1;
       let stars = 1 + 2 * (nFloors - i);
       floors.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    }
    return floors;
  }