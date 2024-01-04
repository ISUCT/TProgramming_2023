import { IAction, Attack, Skill } from './actions';
import { Aff, AffinityList, ActionType } from './affinities';
import { IStatus } from './statuses';

export abstract class Player {
  health: number;
  readonly maxHealth: number;
  readonly strength: number;
  readonly name: string;

  readonly statuses: IStatus[] = [];

  protected currentAttack = 0;

  readonly affinities: AffinityList;

  protected abilityList: Skill[] = [];

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

  public ability(index: number): ActionResult {
    const ability = this.abilityList[index];
    // when no ability, return undefined
    if (ability !== undefined) {
      if (ability.type === ActionType.Support) {
        this.applySupportSkill(ability);
        return new ActionResult(new Skill('uses support', ActionType.Support, 0));
      } else {
        return new ActionResult(ability);
      }
    } else {
      throw new Error(`Ability ${String(index)} doesnt exist`);
    }
  }

  public act(): ActionResult | undefined {
    let isSkipping = false;
    for (let i = 0; i < this.statuses.length; i++) {
      if (this.statuses[i].skipTurn === true) {
        isSkipping = true;
        break;
      }
    }
    if (!isSkipping) {
      if (randomBool() === 0) {
        return this.attack();
      } else {
        return this.ability(0);
      }
    }
  }

  public passTurn(input?: ActionResult): PassResult {
    const reflect = new Skill('reflect', ActionType.Normal, 0);

    if (input !== undefined) {
      const attackDmg = this.calcDamage(input.damage, input.action.type);
      if (attackDmg[1] === Aff.Reflect) {
        reflect.damage = attackDmg[0];
      } else {
        this.health -= attackDmg[0];
      }
    }

    for (let i = 0; i < this.statuses.length; i++) {
      const element = this.statuses[i];
      element.turnCounter--;
      if (element.turnCounter >= 0) {
        this.health -= element.dmgPerTurn;
      }
      if (element.turnCounter === -1) {
        this.statuses.splice(i, 1);
      }
    }

    // is likely to be mutated afterwards, be careful!
    // there's no check for stacking lots of same statuses!
    if (input !== undefined && input.status !== undefined) {
      const aff = this.calcDamage(0, input.status.dmgType)[1];
      if (aff !== Aff.Block && aff !== Aff.Reflect && aff !== Aff.Resist) {
        this.statuses.push(input.status);
      }
    }

    return new PassResult(this.statuses, reflect);
  }

  public simplePassTurn(input?: IAction) {
    // this one just takes damage and applies it to player, no affinities, no effects
    // used for reflect damage
    if (input !== undefined && input.damage !== undefined) {
      this.health -= input.damage;
    }
  }

  protected applySupportSkill(input: IAction) {
    if (input.damage !== undefined) {
      this.health += input.damage;
      if (this.health > this.maxHealth) {
        this.health = this.maxHealth;
      }
    }
    if (input.changer !== undefined) {
      for (let i = 0; i < this.statuses.length; i++) {
        const status = this.statuses[i];
        for (let j = 0; j < input.changer.cancel.length; j++) {
          const change = input.changer.cancel[j];
          if (status === change) {
            this.statuses.splice(i, 1);
          }
        }
      }
    }
  }

  protected calcDamage(dmg: number, dmgType: ActionType): [number, Aff] {
    const affs = this.affinities;
    // compare damage type
    let currAff: Aff = Aff.Block;
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
        return [0, currAff];
        break;
    }
    switch (currAff) {
      case Aff.Block:
        return [0, currAff];
        break;
      case Aff.Resist:
        // here's the damage amplifier for Resist
        return [dmg * 0.4, currAff];
        break;
      case Aff.Weak:
        // here's the damage amplifier for Weak
        return [dmg * 1.6, currAff];
        break;
      case Aff.Normal:
        return [dmg, currAff];
        break;
      case Aff.Reflect:
        return [dmg, currAff];
        break;
    }
  }

  fullHeal() {
    this.health = this.maxHealth;
  }
}

export class ActionResult {
  damage: number;
  status: IStatus | undefined;
  action: IAction;

  constructor(action: IAction) {
    this.damage = action.damage !== undefined ? action.damage : 0;
    this.status = action.status;
    this.action = action;
  }
}

export class PassResult {
  statuses: IStatus[];
  reflectiveAttack: IAction;

  constructor(statuses: IStatus[], reflect: IAction) {
    this.statuses = statuses;
    this.reflectiveAttack = reflect;
  }
}

export function randomBool(): number {
  return Math.random() >= 0.5 ? 1 : 0;
}
