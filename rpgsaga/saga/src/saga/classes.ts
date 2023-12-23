import { Skill } from './actions';
import { Player } from './player';
import { ActionType, Aff } from './affinities';
import { Statuses } from './banks/statuses';
import { Status } from './statuses';

export class Knight extends Player {
  protected abilityList: Skill[] = [new Skill('Ferocious Strike', ActionType.Normal, this.strength * 1.5)];
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name, [Aff.Resist, Aff.Normal, Aff.Normal]);
  }
}

export class Mage extends Player {
  public isEnemyFrozen = false;

  protected abilityList: Skill[] = [
    new Skill('Ice Freeze', ActionType.Ice, 0, Statuses.freeze),
    new Skill('Dia', ActionType.Support, 5),
  ];
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name, [Aff.Weak, Aff.Resist, Aff.Resist]);
  }
}

export class Archer extends Player {
  public isEnemyBurns = false;
  protected abilityList: Skill[] = [new Skill('Fire Arrow', ActionType.Fire, 0, Statuses.burn)];
  constructor(public health: number, public strength: number, public name: string) {
    super(health, strength, name, [Aff.Normal]);
  }
}
