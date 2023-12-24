import { DamageBoostEffect } from '../statusEffects/damageBoostEffect';

import { Spell } from './spell';

export class DamageBoost extends Spell {
  constructor() {
    super(0, new DamageBoostEffect());
  }
}
