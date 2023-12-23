import { Character } from '../character';
import { StatusEffect } from '../statusEffects/statusEffect';

export abstract class Spell {
  protected points: number;
  protected statusEffect: StatusEffect;

  constructor(points: number, statusEffect: StatusEffect) {
    this.points = points;
    this.statusEffect = statusEffect;
  }

  public cast(target: Character) {
    this.statusEffect.target = target;
    target.statusEffects.push(this.statusEffect);
  }
}
