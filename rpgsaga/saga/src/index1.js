"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var logger_1 = require("./logger");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.fight = function () {
        for (var i = 0; i < 10; i++) {
            var unit1 = helper_1.Helper.generateCharacter();
            var unit2 = helper_1.Helper.generateCharacter();
            logger_1.Logger.startMessage();
            logger_1.Logger.fighting(unit1, unit2);
        }
    };
    return Game;
}());
var game = new Game();
game.fight();
