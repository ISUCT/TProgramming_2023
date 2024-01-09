"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.towerBuilder = void 0;
var towerBuilder = function (nFloors) {
    var tower = [];
    var lastFloor = (nFloors - 1) * 2 + 1;
    var space = 0;
    for (var i = 0; i < nFloors; i++) {
        var floor = " ".repeat(space) + "*".repeat(lastFloor) + " ".repeat(space);
        tower.push(floor);
        space++;
        lastFloor -= 2;
    }
    return tower.reverse();
};
exports.towerBuilder = towerBuilder;
console.log((0, exports.towerBuilder)(3));
console.log((0, exports.towerBuilder)(6));
