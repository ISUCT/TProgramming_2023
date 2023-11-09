import { Character } from '../character';
import { Logger } from '../logger';

export class Knight extends Character {
  minHealth = 6;
  maxHealth = 8;

  minStrength = 7;
  maxStrength = 10;

  minDexterity = 3;
  maxDexterity = 7;

  minManaRegeneration = 4;
  maxManaRegeneration = 10;

  minClassSkillCost = 20;
  maxClassSkillCost = 25;

  className = 'Рыцарь';

  attack(enemy: Character): void {
    if (this.classSkillCostValue < this.manaValue) {
      Logger.startAttackMessage(this);
      let damage = this.checkHit();
      damage += (damage / 100) * 10;
      enemy.takeDamage(damage);
      Logger.useKnightSkill(this, enemy, damage);
      this.mana -= this.classSkillCostValue;
    } else {
      super.attack(enemy);
    }
  }

  constructor() {
    super();
  }
}
