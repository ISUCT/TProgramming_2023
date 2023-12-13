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
exports.Magican = void 0;
var unit_1 = require("../unit");
var logger_1 = require("../logger");
var Magican = /** @class */ (function (_super) {
    __extends(Magican, _super);
    function Magican() {
        var _this = _super.call(this) || this;
        _this.minHealth = 5;
        _this.maxHealth = 15;
        _this.classType = 'Magican';
        return _this;
    }
    Magican.prototype.generateUnit = function () {
        _super.prototype.generateUnit.call(this);
    };
    Magican.prototype.attack = function (enemy) {
        if (this.isSkillUsed) {
            _super.prototype.attack.call(this, enemy);
        }
        else {
            console.log("".concat(this.classType, " ").concat(this.getName, " attack ").concat(logger_1.Logger.getCharacterParams(enemy).toString()));
            console.log("".concat(this.getName, " use IceFrost and delals ").concat(enemy.getName, " cold damage = 5"));
            enemy.takeDamage(5);
            console.log("".concat(enemy.getName, " became frozen and it's health became ").concat(enemy.getHealth));
            console.log("".concat(this.getName, " attack ").concat(enemy.getName, " with damage: ").concat(this.getDamage));
            enemy.takeDamage(this.getDamage);
            console.log("".concat(enemy.getName, " health became ").concat(enemy.getHealth));
            this.useSkill();
        }
    };
    return Magican;
}(unit_1.Unit));
exports.Magican = Magican;
