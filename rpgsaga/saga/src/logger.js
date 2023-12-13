"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getCharacterParams = function (unit) {
        return "".concat(unit.classType, " ").concat(unit.getName);
    };
    Logger.startMessage = function () {
        console.log('Fight started now');
    };
    Logger.characterBurn = function (character, firedamage) {
        console.log("".concat(this.getCharacterParams(character).toString(), " burn and take ").concat(firedamage, " damage"));
    };
    Logger.fighting = function (character1, character2) {
        if (character1 != character2) {
            while (character1.getHealth > 0 && character2.getHealth > 0) {
                if (character1.getHealth > 0) {
                    character2.attack(character1);
                }
                if (character1.getHealth <= 0) {
                    console.log("".concat(character2.getName, " wins!"));
                    console.log();
                }
                if (character2.getHealth > 0) {
                    character1.attack(character2);
                }
                if (character2.getHealth <= 0) {
                    console.log("".concat(character1.getName, " wins!"));
                    console.log();
                }
            }
        }
    };
    return Logger;
}());
exports.Logger = Logger;
