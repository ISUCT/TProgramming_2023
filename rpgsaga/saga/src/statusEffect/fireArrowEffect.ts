import { Character } from '../character';

import { StatusEffect } from './statusEffect';

export class FireArrowEffect extends StatusEffect {
  constructor() {
    super('flame', 3);
  }

  public apply(target: Character): boolean {
    if (this.canApply()) {
      target.receiveDamage(2);
      return true;
    }

    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public remove(target: Character) {
    return;
  }
}
