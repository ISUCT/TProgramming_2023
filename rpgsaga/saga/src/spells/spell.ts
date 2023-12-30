import { Character } from '../character';
import { StatusEffect } from '../statusEffects/statusEffect';

export abstract class Spell {
  protected points: number;
  protected statusEffect: StatusEffect;
  protected usesRemaining: number;

  constructor(points: number, statusEffect: StatusEffect, usesRemaining: number) {
    this.points = points;
    this.statusEffect = statusEffect;
    this.usesRemaining = usesRemaining;
  }

  private canCastASpell(): boolean {
    return this.usesRemaining > 0;
  }

  public cast(target: Character) {
    if (this.canCastASpell()) {
      target.receiveDamage(this.points);
      this.statusEffect.target = target;
      target.statusEffects.addLast(this.statusEffect);
    }
  }
}
