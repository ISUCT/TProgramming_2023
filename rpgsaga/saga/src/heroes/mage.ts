import { Messenger } from '../messenger';
import { Hero } from './hero';

export class Mage extends Hero {
  heroName: string = 'Маг';

  constructor(health: number, power: number, name: string, messenger: Messenger) {
    super(health, power, name, messenger);
  }

  useHeroAbility(enemy: Hero) {
    if (!this.usedAbility) {
      this.usedAbility = true;
      enemy.isCanAttack = false;

      this.messenger.sendMessage(
        `(${this.heroName}) ${this.name} использует (заворожение), противник (${enemy.heroName}) ${enemy.name} пропустит следующий ход.`,
      );
    }
  }
}
