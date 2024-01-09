import { Messenger } from '../messenger';
import { Hero } from './hero';

const RETALIATION_STRIKE_INCREASE_DAMAGE_INDEX = 1.3;

export class Knight extends Hero {
  heroName: string = 'Рыцарь';

  constructor(health: number, power: number, name: string, messenger: Messenger) {
    super(health, power, name, messenger);
  }

  useHeroAbility(enemy: Hero) {
    if (!this.usedAbility) {
      enemy.getDamage(this.power * RETALIATION_STRIKE_INCREASE_DAMAGE_INDEX);
      this.usedAbility = true;

      this.messenger.sendMessage(
        `(${this.heroName}) ${this.name} использует (Удар возмездия) и наносит урон ${
          this.power * RETALIATION_STRIKE_INCREASE_DAMAGE_INDEX
        } противнику (${enemy.heroName}) ${enemy.name}.`,
      );
    }
  }
}
