import { Ability, IAction, Attack, State } from './actions';
import { Aff, AffinityList, ActionType } from './affinities';
import { IStatus, Status } from './statuses';

export abstract class Player {
  health: number;
  readonly maxHealth: number;
  readonly strength: number;
  readonly name: string;

  protected status: IStatus[] = [];
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

    // deal with damage, no defence
    this.health -= this.calcDamage(input.damage, input.action.type, this.affinities);

    for (let i = 0; i < this.status.length; i++) {
      const element = this.status[i];
      element.turnCounter--;
      this.health -= this.calcDamage(input.status.dmgPerTurn, input.status.dmgType, this.affinities);
    }
    // is likely to be mutated afterwards, be careful!
    // there's no check for stacking lots of same statuses!
    this.status.push(input.status);

    // this is from when flags and counters were used for statuses
    // if (this.isFrozenCounter === 0) {
    //   if (input.status.turnCounter > 0) {
    //     this.isFrozenCounter = input.status.turnCounter;
    //   }
    // } else {
    //   this.isFrozenCounter -= 1;
    //   res.isFrosenCancelled = true;
    //   res.action = new State('unfrozen');
    // }
    // if (this.isBurned) {
    //   this.health -= 2;
    // } else {
    //   this.isBurned = input.setEffectBurn;
    // }
    return res;
  }

  protected calcDamage(dmg: number, dmgType: ActionType, affs: AffinityList): number {
    // compare damage type
    let currAff: Aff;
    switch (dmgType) {
      case ActionType.Normal:
        currAff = affs.Normal;
        break;
      case ActionType.Fire:
        currAff = affs.Fire;
        break;
      case ActionType.Ice:
        currAff = affs.Ice;
        break;
      case ActionType.Electric:
        currAff = affs.Electric;
        break;
      default:
        // idk how to cancel if dmgType is Support
        return 0;
        break;
    }
    switch (currAff) {
      case Aff.Block:
        return 0;
        break;
      case Aff.Resist:
        // here's the damage amplifier for Resist
        return dmg * 0.8;
        break;
      case Aff.Weak:
        return dmg * 1.6;
        break;
      case Aff.Normal:
        return dmg;
        break;
      case Aff.Reflect:
        // NO IMPLEMINTATION YET, idk how to make counterattack damage
        return 0;
        break;
    }
  }

  fullHeal() {
    this.health = this.maxHealth;
  }
}

export class ActionResult {
  damage: number;
  status: IStatus;
  action: IAction;

  constructor(action: IAction) {
    this.damage = action.damage !== undefined ? action.damage : 0;
    this.status = action.status !== undefined ? action.status : new Status('');
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
