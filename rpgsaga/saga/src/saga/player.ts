import { Ability, IAction, Attack, State } from './actions';

export enum Aff {
  Normal,
  Block,
  Resist,
  Reflect,
  Weak,
}
export enum ActionType {
  Fire,
  Ice,
  Electric,
  Normal,
  Support,
}

class AffinityList {
  // INTENDED UpperCamelCase because of Aff enum
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Normal: Aff;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Fire: Aff;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Ice: Aff;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Electric: Aff;

  constructor(aff: Aff[]) {
    while (aff.length < 4) {
      aff.push(Aff.Normal);
    }
    this.Normal = aff[0];
    this.Fire = aff[1];
    this.Ice = aff[2];
    this.Electric = aff[3];
  }
}

export abstract class Player {
  health: number;
  readonly maxHealth: number;
  readonly strength: number;
  readonly name: string;

  protected isBurned = false;
  protected isFrozenCounter = 0;

  protected currentAttack = 0;

  affinities: AffinityList;

  constructor(health: number, strength: number, name: string, affinity: Aff[]) {
    this.health = health;
    this.maxHealth = health;
    this.strength = strength;
    this.name = name;
    this.affinities = new AffinityList(affinity);
  }

  public attack(): ActionResult {
    return new ActionResult(new Attack(this.strength));
  }

  public ability(): ActionResult {
    // when no ability, return null
    return new ActionResult(new Ability('debug ability', ActionType.Support, 0, false, false));
  }

  public act(): ActionResult {
    if (this.isFrozenCounter === 0) {
      if (randomBool() === 0) {
        return this.attack();
      } else {
        return this.ability();
      }
    } else {
      return new ActionResult(new State('frozen'));
    }
  }
  public passTurn(input: ActionResult): StateChange {
    const res = new StateChange(0, false, false, new State(''));

    this.health -= input.damage;
    if (this.isFrozenCounter === 0) {
      if (input.setEffectFreeze) {
        this.isFrozenCounter = 1;
      }
    } else {
      this.isFrozenCounter -= 1;
      res.isFrosenCancelled = true;
      res.action = new State('unfrozen');
    }
    if (this.isBurned) {
      this.health -= 2;
    } else {
      this.isBurned = input.setEffectBurn;
    }
    return res;
  }

  fullHeal() {
    this.health = this.maxHealth;
  }
}

export class ActionResult {
  damage: number;
  setEffectFreeze: boolean;
  setEffectBurn: boolean;
  action: IAction;

  constructor(action: IAction) {
    this.damage = action.damage !== undefined ? action.damage : 0;
    this.setEffectFreeze = action.freeze !== undefined ? action.freeze : false;
    this.setEffectBurn = action.burn !== undefined ? action.burn : false;
    this.action = action;
  }
}

export class StateChange {
  isBurnedCancelled: boolean;
  isFrosenCancelled: boolean;
  pointsHealed: number;
  action: IAction;

  constructor(hpAdded: number, burnCancel: boolean, frozenCancel: boolean, action: IAction) {
    this.pointsHealed = hpAdded;
    this.isBurnedCancelled = burnCancel;
    this.isFrosenCancelled = frozenCancel;
    this.action = action;
  }
}

export function randomBool(): number {
  return Math.random() >= 0.5 ? 1 : 0;
}
