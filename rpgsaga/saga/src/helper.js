"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var stringConsts_1 = require("./stringConsts");
var warriror_1 = require("./unitClasses/warriror");
var archer_1 = require("./unitClasses/archer");
var magican_1 = require("./unitClasses/magican");
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Helper.getRandomEnumValue = function (enumObj) {
        var enumValues = Object.values(enumObj);
        var randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    };
    Helper.generateCharacter = function () {
        for (var i = 0; i < 1; i++) {
            var character = void 0;
            switch (Helper.getRandomEnumValue(stringConsts_1.Classes)) {
                case stringConsts_1.Classes.WARRIOR:
                    character = new warriror_1.Warrior();
                    character.generateUnit();
                    return character;
                case stringConsts_1.Classes.ARCHER:
                    character = new archer_1.Archer();
                    character.generateUnit();
                    return character;
                case stringConsts_1.Classes.MAGICAN:
                    character = new magican_1.Magican();
                    character.generateUnit();
                    return character;
            }
        }
    };
    return Helper;
}());
exports.Helper = Helper;
