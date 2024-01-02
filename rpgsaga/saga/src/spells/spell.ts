import { Character } from '../character';
import { StatusEffect } from '../statusEffects/statusEffect';

export class Spell {
  protected points: number;
  protected statusEffect: StatusEffect;
  protected usesRemaining: number;

  constructor(points: number, statusEffect: StatusEffect, usesRemaining: number) {
    this.points = points;
    this.statusEffect = statusEffect;
    this.usesRemaining = usesRemaining;
  }

  public isCastable(): boolean {
    return this.usesRemaining > 0;
  }

  public cast(target: Character) {
    if (this.isCastable()) {
      target.receiveDamage(this.points);
      this.statusEffect.target = target;
      target.statusEffects.addLast(this.statusEffect);
    }
  }
}
