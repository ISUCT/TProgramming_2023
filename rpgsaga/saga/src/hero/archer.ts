import { Logger } from '../logger/logger';
import { Hero } from './hero';

export class Archer extends Hero {
  heroType: string = 'Лучник';

  constructor(name: string, health: number, strength: number, logger: Logger) {
    super(name, health, strength, logger);
  }

  useAbility(opponent: Hero) {
    if (!this.usedAbility) {
      this.usedAbility = true;
      this.logger.log(
        `(${this.heroType}) ${this.name} использует (Огненные стрелы) на игрока (${opponent.heroType}) ${opponent.name}, он загорается и теряет 2 единицы жизни.`,
      );
      opponent.getDamage(2, this, false);
    }
  }

  attack(opponent: Hero) {
    const strength = this.useAbility ? this.strength + 2 : this.strength;
    opponent.getDamage(strength, this);
  }
}
