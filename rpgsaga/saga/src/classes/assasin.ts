import { Character } from '../character';
import { Logger } from '../logger';

export class Assasin extends Character {
  minHealth = 5;
  maxHealth = 8;

  minStrength = 7;
  maxStrength = 10;

  minDexterity = 8;
  maxDexterity = 10;

  minManaRegeneration = 8;
  maxManaRegeneration = 10;

  minClassSkillCost = 15;
  maxClassSkillCost = 20;

  className = 'Ассасин';

  attack(enemy: Character): void {
    super.attack(enemy);
    if (this.classSkillCostValue < this.manaValue) {
      enemy.stun();
      Logger.useAssasinSkill(this, enemy);
      this.mana -= this.classSkillCostValue;
    }
  }

  constructor() {
    super();
  }
}
