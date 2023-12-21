import { Logger } from '../logger/logger';
import { Hero } from './hero';

export class Mage extends Hero {
  heroType: string = 'Маг';

  constructor(name: string, health: number, strength: number, logger: Logger) {
    super(name, health, strength, logger);
  }

  useAbility(opponent: Hero) {
    if (!this.usedAbility) {
      this.usedAbility = true;
      this.logger.log(
        `(${this.heroType}) ${this.name} использует (заворожение), противник (${opponent.heroType}) ${opponent.name} пропустит следующий ход.`,
      );
      opponent.canWalk = false;
    }
  }
}
