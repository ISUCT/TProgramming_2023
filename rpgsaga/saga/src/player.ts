import { randomInt } from './utils';

export type PlayerType = 'Лучник' | 'Маг' | 'Рыцарь';
export type AbilityName = 'Удар возмездия' | 'Заворожение' | 'Огненные стрелы';

export abstract class Player {
  startHealth: number;
  health: number;
  name: string;
  stunned = false;
  canCauseDamage = true;
  tickDamage = 0;

  readonly type: PlayerType;
  readonly abilityName: AbilityName;
  protected strength: number;

  constructor(n: string) {
    this.startHealth = randomInt(50, 100);
    this.health = this.startHealth;
    this.strength = randomInt(20, 50);
    this.name = n;
  }

  getStrength() {
    return this.strength;
  }

  abstract ability(player: Player): void;
}
