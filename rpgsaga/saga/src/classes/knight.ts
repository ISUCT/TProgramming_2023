import { Character } from "../character"
import { Logger } from "../logger";

export class Knight extends Character {

    _minHealth = 7;
    _maxHealth = 10;

    _minStrength = 7;
    _maxStrength = 10;

    _minDexterity = 5;
    _maxDexterity = 7;

    _minManaRegeneration = 8;
    _maxManaRegeneration = 10;

    _minClassSkillCost = 15;
    _maxClassSkillCost = 20;

    className: string = "Рыцарь";

    attack(enemy: Character): void {

        if (!this.isStunned) {
            if (this.classSkillCost < this.mana) {
                Logger.startAttackMessage(this);

                let hitStrength = this.checkDexterity();
                let dodgeStrength = enemy.checkDexterity();

                    let damage = this.checkHit();
                    damage += damage / 100 * 30;
                    enemy.takeDamage(damage);
                    Logger.UseKnightSkill(this, enemy, damage);
                    Logger.failedAttackMessage(this, hitStrength, enemy, dodgeStrength)
                }
                else{
                    super.attack(enemy);
                }
            } else {
                this.isStunned = false;
            }

        }
        
    constructor() {
        super();
    }
}