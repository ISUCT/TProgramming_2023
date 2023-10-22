import { Player, ActionResult } from './player';

export class Knight extends Player {
  constructor(public health: number, public strength: number, public name: string) {
    super();
  }

  public ability(): ActionResult {
    return new ActionResult(this.strength * 0.3, false, false, 'Удар возмездия');
  }
}

export class Mage extends Player {
  public isEnemyFrozen = false;
  constructor(public health: number, public strength: number, public name: string) {
    super();
  }

  public ability(): ActionResult {
    return new ActionResult(0, false, true, 'Заворожение');
  }
}

export class Archer extends Player {
  public isEnemyBurns = false;
  constructor(public health: number, public strength: number, public name: string) {
    super();
  }

  public ability(): ActionResult {
    return new ActionResult(0, true, false, 'Огненные стрелы');
  }
}
