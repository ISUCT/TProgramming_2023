import color from 'colorts';

import { MathHelper } from './mathHelper';
import { fireDamage, names } from './constants';
import { Logger } from './logger';

export class Character {
  className = '';
  private isBurn = false;
  get isBurnValue(): boolean {
    return this.isBurn;
  }

  protected isStunned = false;
  private health: number;
  get healthValue(): number {
    return this.health;
  }
  protected minHealth = 5;
  protected maxHealth = 10;

  private strength: number;
  get strengthValue(): number {
    return this.strength;
  }
  protected minStrength = 5;
  protected maxStrength = 10;

  private characterName: string;
  get characterNameValue(): string {
    return this.characterName;
  }

  private dexterity: number;
  get dexterityValue(): number {
    return this.dexterity;
  }
  protected minDexterity = 5;
  protected maxDexterity = 10;

  protected mana = 0;
  get manaValue(): number {
    return this.mana;
  }

  private manaRegeneration: number;
  get manaRegenerationValue(): number {
    return this.manaRegeneration;
  }
  protected minManaRegeneration = 8;
  protected maxManaRegeneration = 10;

  private classSkillCost = 0;
  get classSkillCostValue(): number {
    return this.classSkillCost;
  }
  protected minClassSkillCost = 15;
  protected maxClassSkillCost = 20;

  constructor() {
    this.generateStats();
  }

  public stun() {
    this.isStunned = true;
  }

  private generateStats() {
    this.health = MathHelper.genrateRandomNumber(this.minHealth, this.maxHealth);
    this.strength = MathHelper.genrateRandomNumber(this.minStrength, this.maxStrength);
    this.dexterity = MathHelper.genrateRandomNumber(this.minDexterity, this.maxDexterity);
    this.characterName = this.selectColorName(names[MathHelper.genrateRandomNumber(0, names.length - 1)]);
    this.manaRegeneration = MathHelper.genrateRandomNumber(this.minManaRegeneration, this.maxManaRegeneration);
    this.classSkillCost = MathHelper.genrateRandomNumber(this.minClassSkillCost, this.maxClassSkillCost);
  }

  public checkInitiative() {
    return MathHelper.genrateRandomNumber(1, this.dexterity * 10);
  }

  public checkDexterity() {
    return MathHelper.genrateRandomNumber(1, this.dexterity * 10);
  }

  public checkHit() {
    return MathHelper.genrateRandomNumber(1, this.strengthValue * 10);
  }

  public takeDamage(damage: number) {
    this.health -= damage;
  }

  private selectColorName(name: string): string {
    let result = '';
    switch (MathHelper.genrateRandomNumber(0, 6)) {
      case 0:
        result = color(name).red.toString();
        break;
      case 1:
        result = color(name).green.toString();
        break;
      case 2:
        result = color(name).yellow.toString();
        break;
      case 3:
        result = color(name).blue.toString();
        break;
      case 4:
        result = color(name).magenta.toString();
        break;
      case 5:
        result = color(name).cyan.toString();
        break;
      default:
        result = name;
        break;
    }
    return result;
  }

  startBurn() {
    this.isBurn = true;
  }

  endBurn() {
    this.isBurn = false;
  }

  characterTurn(enemy: Character) {
    this.attack(enemy);
    this.processEffects();
  }

  protected attack(enemy: Character) {
    if (!this.isStunned) {
      Logger.startAttackMessage(this);

      const hitStrength = this.checkDexterity();
      const dodgeStrength = enemy.checkDexterity();

      if (hitStrength > dodgeStrength) {
        const damage = this.checkHit();
        enemy.takeDamage(damage);
        Logger.successAttackMessage(this, hitStrength, enemy, dodgeStrength, damage);
      } else {
        Logger.failedAttackMessage(this, hitStrength, enemy, dodgeStrength);
      }
    }
  }

  hillHP() {
    this.health += 100;
  }

  protected processEffects() {
    if (this.isBurn) {
      this.health -= fireDamage;
      Logger.characterBurn(this, fireDamage);
    }

    if (this.isStunned) {
      this.isStunned = false;
    }

    this.mana += this.manaRegeneration;
  }
}
