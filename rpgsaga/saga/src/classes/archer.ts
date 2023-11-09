import { Character } from '../character';
import { Logger } from '../logger';

export class Archer extends Character {
  minHealth = 5;
  maxHealth = 8;

  minStrength = 7;
  maxStrength = 10;

  minDexterity = 7;
  maxDexterity = 10;

  minManaRegeneration = 8;
  maxManaRegeneration = 15;

  minClassSkillCost = 10;
  maxClassSkillCost = 20;

  className = 'Лучник';

  attack(enemy: Character): void {
    if (this.classSkillCostValue < this.manaValue && !enemy.isBurnValue) {
      Logger.useArcherSkill(this, enemy);
      enemy.startBurn();
      this.mana -= this.classSkillCostValue;
    } else {
      super.attack(enemy);
    }
  }

  constructor() {
    super();
  }
}
