import { Logger } from '../logger/logger';

export abstract class Hero {
  name: string;
  fullHealth: number;
  currentHealth: number;
  strength: number;
  usedAbility: boolean = false;
  canWalk: boolean = true;

  // abstract - значение которое должно быть у наследников (archer, knight, mage)
  abstract heroType: string;
  logger: Logger;

  constructor(name: string, health: number, strength: number, logger: Logger) {
    this.name = name;
    this.fullHealth = health;
    this.currentHealth = health;
    this.strength = strength;
    this.logger = logger;
  }

  attack(opponent: Hero) {
    opponent.getDamage(this.strength, this);
  }

  getDamage(damage: number, opponent: Hero, showLog = true) {
    this.currentHealth -= damage;

    if (showLog) {
      this.logger.log(
        `(${opponent.heroType}) ${opponent.name} наносит урон ${this.strength} противнику (${this.heroType}) ${this.name}.`,
      );
    }
  }

  refreshHero() {
    this.currentHealth = this.fullHealth;
    this.usedAbility = false;
    this.canWalk = true;
  }

  // abstract - метод класса который должен реализоваться у наследников (archer, knight, mage)
  abstract useAbility(opponent: Hero): void;
}
