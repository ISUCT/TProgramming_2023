import { criticalDamage, DamageType, maxDamageValues, maxHealthValue } from '../constants/config';

import { BasicHero } from './basicHero';

export class Warrior extends BasicHero {
  heroType = 'Warrior';

  constructor(name: string) {
    super(name, DamageType.Physical, 0, maxHealthValue.Warrior);
  }

  performUltraAttack() {
    this.typeAttack = DamageType.Physical;
    this.damageCaused =
      Math.floor(Math.random() * (maxDamageValues[this.typeAttack] - 11) + 10) + criticalDamage[this.typeAttack].damage;
  }
}
