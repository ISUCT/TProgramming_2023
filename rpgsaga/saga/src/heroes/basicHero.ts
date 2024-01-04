import { Logger } from '../logger/logger';
import { chanceCriticalDamage, maxDamageValues } from "../constants/config";

export abstract class BasicHero {
  name: string;
  typeAttack: string;
  damageCaused: number;
  startHealth: number;
  currentHealth: number;
  useUltraAttack: boolean;
  isFrozen: boolean;
  permanentCritical? = 0;

  protected constructor(name: string, typeAttack: string, damageCaused: number, startHealth: number) {
    this.name = name;
    this.typeAttack = typeAttack;
    this.damageCaused = damageCaused;
    this.startHealth = startHealth;
    this.currentHealth = startHealth;
    this.useUltraAttack = false;
    this.isFrozen = false;
  }

  takeDamage(damage: number): void {
    this.currentHealth -= damage;
  }

  performAttack(target: BasicHero): void {
    if (!this.isFrozen) {
      this.setDamageCaused(target);
      target.takeDamage(this.damageCaused);
    } else {
      console.log(`${this.heroType} заморожен`);
      this.isFrozen = false;
    }
  }

  resetStats(): void {
    this.currentHealth = this.startHealth;
    this.useUltraAttack = false;
  }

  setDamageCaused(target: BasicHero) {
    this.useUltraAttack = Math.random() <= chanceCriticalDamage[this.typeAttack];

    if (this.useUltraAttack) {
      this.performUltraAttack(target);
      Logger.criticalAttack(this.heroType, this.typeAttack);
      this.useUltraAttack = false;
    } else {
      this.damageCaused =
        Math.floor(Math.random() * (maxDamageValues[this.typeAttack] - 11) + 10) + this.permanentCritical;
      Logger.dealDamage(this.damageCaused, this.typeAttack, this.heroType, target);
    }
  }

  abstract heroType: string;
  abstract performUltraAttack(target?: BasicHero);
}
