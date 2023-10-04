import { Character } from "../character"
import { Logger } from "../logger";

export class Knight extends Character {

    _minHealth = 6;
    _maxHealth = 8;

    _minStrength = 7;
    _maxStrength = 10;

    _minDexterity = 3;
    _maxDexterity = 7;

    _minManaRegeneration = 4;
    _maxManaRegeneration = 10;

    _minClassSkillCost = 20;
    _maxClassSkillCost = 25;

    className: string = "Рыцарь";

    attack(enemy: Character): void {

        if (this.classSkillCost < this.mana) {
            Logger.startAttackMessage(this);
            let damage = this.checkHit();
            damage += (damage / 100 * 10);
            enemy.takeDamage(damage);
            Logger.UseKnightSkill(this, enemy, damage);
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