function towerBuilder(nFloors) {
    var tower = [];
    var space = " ";
    var star = "*";
    for (var index = 0; index < nFloors; ++index){
      var floor = space.repeat(nFloors - (index +1)) + star.repeat(index) + "*" + star.repeat(index) + space.repeat(nFloors - (index +1));
      tower.push(floor);
    }
    return tower;
  }