function randElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function name_generator() {
    var name_list1 = ["Theo", "Neo", "Proto", "Sonato", "Ahillo", "Elde", "Akwe"];
    var name_list2 = ["win", "dor", "gen", "slav", "strator", "richt", "lord"];
    return randElement(name_list1) + randElement(name_list2);
}
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
console.log(name_generator());
