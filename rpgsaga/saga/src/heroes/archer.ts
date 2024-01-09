import { Messenger } from '../messenger';
import { Hero } from './hero';

const ARROWS_DAMAGE = 2;

export class Archer extends Hero {
  heroName: string = 'Лучник';

  constructor(health: number, power: number, name: string, messenger: Messenger) {
    super(health, power, name, messenger);
  }

  attack(enemy: Hero) {
    enemy.getDamage(this.usedAbility ? this.power + ARROWS_DAMAGE : this.power);
    this.sendDamageMessage(enemy);
  }

  useHeroAbility(enemy: Hero) {
    if (!this.usedAbility) {
      enemy.getDamage(ARROWS_DAMAGE);
      this.usedAbility = true;

      this.messenger.sendMessage(
        `(${this.heroName}) ${this.name} использует (Огненные стрелы) на игрока (${enemy.heroName}) ${enemy.name}, он загорается и теряет ${ARROWS_DAMAGE} единицы жизни.`,
      );
    }
  }
}
