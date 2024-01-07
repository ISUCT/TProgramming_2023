import { Message } from '../../message';
import { StunEffect } from '../statusEffect/stunEffect';

import { Spell } from './spell';

export class Stun extends Spell {
  constructor() {
    super('Stun', 2, 0, new StunEffect());
  }

  public cast(message: Message): boolean {
    if (this.isCastable()) {
      message.target.receiveDamage(this.damagePoints);
      this.castsRemaining -= 1;
      return true;
    }

    return false;
  }
}
