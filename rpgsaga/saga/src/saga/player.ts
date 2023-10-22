export abstract class Player {
  abstract health: number;
  abstract readonly strength: number;
  abstract readonly name: string;

  protected isBurned = false;
  protected isFrozenCounter = 0;

  protected currentAttack = 0;

  public attack(): ActionResult {
    return new ActionResult(this.strength, false, false, 'default attack');
  }

  public ability(): ActionResult {
    // when no ability, return null
    return new ActionResult(0, false, false, 'debug ability');
  }

  public act(): ActionResult {
    if (randomBool() === 0 && this.isFrozenCounter === 0) {
      return this.attack();
    } else {
      return this.ability();
    }
  }
  public passTurn(input: ActionResult) {
    this.health -= input.damage;
    if (this.isFrozenCounter === 0) {
      if (input.setEffectFreeze) {
        this.isFrozenCounter = 1;
      }
    } else {
      this.isFrozenCounter -= 1;
    }
    if (this.isBurned) {
      this.health -= 2;
    } else {
      this.isBurned = input.setEffectBurn;
    }
  }
}

export class ActionResult {
  damage: number;
  setEffectFreeze: boolean;
  setEffectBurn: boolean;
  actionName = '';

  constructor(damage: number, burn: boolean, freeze: boolean, name: string) {
    this.damage = damage;
    this.setEffectFreeze = freeze;
    this.setEffectBurn = burn;
    this.actionName = name;
  }
}

export function randomBool(): number {
  return Math.random() >= 0.5 ? 1 : 0;
}
