import { Message } from '../../message';
import { FireArrowEffect } from '../statusEffect/fireArrowEffect';

import { Spell } from './spell';

export class FireArrow extends Spell {
  constructor() {
    super('FireArrow', 2, 7, new FireArrowEffect());
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
