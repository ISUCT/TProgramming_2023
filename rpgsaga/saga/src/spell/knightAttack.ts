import { Message } from '../message';

import { Spell } from './spell';

export class KnightAttack extends Spell {
  constructor() {
    super('Mighty Slash', 2, 0, null);
  }

  public cast(message: Message): boolean {
    if (this.isCastable()) {
      message.target.receiveDamage(message.damagePoints * 2.0);
      this.castsRemaining -= 1;
      return true;
    }

    return false;
  }
}
