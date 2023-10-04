import { Character } from "../character";
import { Logger } from "../logger";

export class Archer extends Character {
    
    _minHealth = 5;
    _maxHealth = 8;

    _minStrength = 7;
    _maxStrength = 10;

    _minDexterity = 7;
    _maxDexterity = 10;

    _minManaRegeneration = 8;
    _maxManaRegeneration = 15;

    _minClassSkillCost = 10;
    _maxClassSkillCost = 20;

    className: string = "Лучник";

    attack(enemy: Character): void {
        if (this.classSkillCost < this.mana && !enemy.isBurn) {
            Logger.UseArcherSkill(this, enemy);
            enemy.startBurn();
            this._mana -= this.classSkillCost;
        }
        else {
            super.attack(enemy);
        }
    }

    constructor() {
        super();
    }
}