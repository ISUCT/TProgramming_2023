import color from "colorts";
import { Character } from "../character"
import { Logger } from "../logger";

export class Assasin extends Character {
    
    _minHealth = 5;
    _maxHealth = 8;

    _minStrength = 5;
    _maxStrength = 10;

    _minDexterity = 8;
    _maxDexterity = 10;

    _minManaRegeneration = 8;
    _maxManaRegeneration = 10;

    _minClassSkillCost = 15;
    _maxClassSkillCost = 20;

    className: string = "Ассасин";

    attack(enemy: Character): void {
        if(this.classSkillCost < this.mana)
        {
            enemy.Stun();
            this._mana -= this.classSkillCost;
            Logger.UseAssasinSkill(this, enemy);
        } 
        super.attack(enemy);
    }

    constructor() {
        super();
    }
}