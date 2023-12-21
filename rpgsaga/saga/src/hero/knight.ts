import { Logger } from '../logger/logger';
import { Hero } from './hero';

export class Knight extends Hero {
  heroType: string = 'Рыцарь';

  constructor(name: string, health: number, strength: number, logger: Logger) {
    super(name, health, strength, logger);
  }

  useAbility(opponent: Hero) {
    if (!this.usedAbility) {
      this.usedAbility = true;
      const damage = this.strength * 1.3;

      this.logger.log(
        `(${this.heroType}) ${this.name} использует (Удар возмездия) и наносит урон ${damage} противнику (${opponent.heroType}) ${opponent.name}.`,
      );
      opponent.getDamage(damage, this, false);
    }
  }
}
