function towerBuilder(nFloors) {
  let res = [];
  let width = ((nFloors * 2) - 1);
  
  for (let i = 1; i <= nFloors; i++) {
    let space = " ".repeat(nFloors - i);
    let star = "*".repeat((i * 2) - 1);
    let floor = space + star + space;
    res.push(floor);
  }
  
  return res;
}
