import { FireEffect } from '../statusEffects/fireEffect';

import { Spell } from './spell';

export class FireArrow extends Spell {
  constructor() {
    super(3, new FireEffect(), 1);
  }
}
