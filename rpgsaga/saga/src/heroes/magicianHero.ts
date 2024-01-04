import { criticalDamage, DamageType, maxDamageValues, maxHealthValue } from '../constants/config';

import { BasicHero } from './basicHero';

const typeMagicianAttacks = ['Poison', 'Ice', 'Electric'];

export class Magician extends BasicHero {
  heroType = 'Magician';

  constructor(name: string) {
    super(name, DamageType.Poison, 0, maxHealthValue.Magician);
    this.typeAttack = typeMagicianAttacks[Math.floor(Math.random() * typeMagicianAttacks.length)];
  }

  performUltraAttack(target: BasicHero) {
    this.typeAttack = typeMagicianAttacks[Math.floor(Math.random() * typeMagicianAttacks.length)];

    if (this.typeAttack === DamageType.Electric) {
      this.damageCaused =
        Math.floor(Math.random() * (maxDamageValues[this.typeAttack] - 11) + 10) +
        criticalDamage[this.typeAttack].damage;
    } else if (this.typeAttack === DamageType.Poison) {
      this.permanentCritical += criticalDamage[this.typeAttack].damage;
      this.damageCaused =
        Math.floor(Math.random() * (maxDamageValues[this.typeAttack] - 11) + 10) + this.permanentCritical;
    } else if (this.typeAttack === DamageType.Ice) {
      target.isFrozen = true;
      this.damageCaused = 0;
    }
  }
}
