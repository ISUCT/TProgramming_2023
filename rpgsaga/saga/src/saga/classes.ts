import { Ability, AbilityAttack } from './actions';
import { Player, ActionResult, ActionType, Aff } from './player';

export class Knight extends Player {
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name, [Aff.Resist, Aff.Normal, Aff.Normal]);
  }

  public ability(): ActionResult {
    return new ActionResult(new AbilityAttack('Удар возмездия', ActionType.Normal, this.strength * 1.3, false, false));
  }
}

export class Mage extends Player {
  public isEnemyFrozen = false;
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name, [Aff.Weak, Aff.Resist, Aff.Resist]);
  }

  public ability(): ActionResult {
    return new ActionResult(new Ability('Заворожение', ActionType.Ice, 0, false, true));
  }
}

export class Archer extends Player {
  public isEnemyBurns = false;
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name, [Aff.Normal]);
  }

  public ability(): ActionResult {
    return new ActionResult(new Ability('Огненные стрелы', ActionType.Fire, 0, true, false));
  }
}
