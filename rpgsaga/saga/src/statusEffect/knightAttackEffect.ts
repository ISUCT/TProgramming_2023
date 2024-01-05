import { Character } from '../character';

import { StatusEffect } from './statusEffect';

export class KnightAttackEffect extends StatusEffect {
  constructor() {
    super('Damage booster', 1);
  }

  public apply(target: Character) {
    target.strengthModificator = 2.0;
  }

  public remove(target: Character) {
    target.strengthModificator = 1.0;
  }
}
