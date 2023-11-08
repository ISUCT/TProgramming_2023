import { Ability, AbilityAttack } from './actions';
import { Player, ActionResult } from './player';

export class Knight extends Player {
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name);
  }

  public ability(): ActionResult {
    return new ActionResult(this.strength * 1.3, false, false, new AbilityAttack('Удар возмездия'));
  }
}

export class Mage extends Player {
  public isEnemyFrozen = false;
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name);
  }

  public ability(): ActionResult {
    return new ActionResult(0, false, true, new Ability('Заворожение'));
  }
}

export class Archer extends Player {
  public isEnemyBurns = false;
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name);
  }

  public ability(): ActionResult {
    return new ActionResult(0, true, false, new Ability('Огненные стрелы'));
  }
}
