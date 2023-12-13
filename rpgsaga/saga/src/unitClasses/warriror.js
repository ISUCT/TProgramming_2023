"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var unit_1 = require("../unit");
var logger_1 = require("../logger");
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        var _this = _super.call(this) || this;
        _this.minHealth = 10;
        _this.maxHealth = 30;
        _this.classType = 'Warrior';
        return _this;
    }
    Warrior.prototype.generateUnit = function () {
        _super.prototype.generateUnit.call(this);
    };
    Warrior.prototype.attack = function (enemy) {
        if (this.isSkillUsed) {
            _super.prototype.attack.call(this, enemy);
        }
        else {
            console.log("".concat(this.classType, " ").concat(this.getName, " attack ").concat(logger_1.Logger.getCharacterParams(enemy).toString()));
            console.log("".concat(this.getName, " use ultimate and it's damage became = ").concat(this.getDamage + 10));
            enemy.takeDamage(this.getDamage + 10);
            console.log("".concat(enemy.getName, " health became ").concat(enemy.getHealth));
            this.useSkill();
        }
    };
    return Warrior;
}(unit_1.Unit));
exports.Warrior = Warrior;
