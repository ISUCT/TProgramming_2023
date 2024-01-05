import { Message } from '../message';
import { StunEffect } from '../statusEffect/stunEffect';

import { Spell } from './spell';

export class Stun extends Spell {
  constructor() {
    super('Stun', 2, 0, new StunEffect());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public cast(message: Message): boolean {
    if (this.isCastable()) {
      this.castsRemaining -= 1;
      return true;
    }

    return false;
  }
}
