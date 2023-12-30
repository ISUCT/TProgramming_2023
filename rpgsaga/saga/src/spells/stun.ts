import { StunEffect } from '../statusEffects/stunEffect';

import { Spell } from './spell';

export class Stun extends Spell {
  constructor() {
    super(0, new StunEffect(), 1);
  }
}
