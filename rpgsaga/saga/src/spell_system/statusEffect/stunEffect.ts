import { Character } from '../../character';

import { StatusEffect } from './statusEffect';

export class StunEffect extends StatusEffect {
  constructor() {
    super('Stun', 1);
  }

  public apply(target: Character): boolean {
    if (this.canApply()) {
      this.usesRemaining -= 1;

      console.log(`${target.toString()} is now stunned! (${this.usesRemaining} turns remaining)`);

      target.isStunned = true;

      return true;
    }

    return false;
  }

  public remove(target: Character) {
    target.isStunned = false;
  }
}
