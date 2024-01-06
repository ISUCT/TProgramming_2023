import { AbilityName, Player, PlayerType } from './player';

export class Knight extends Player {
  protected strengthMultiplier = 1;
  type: PlayerType = 'Рыцарь';
  abilityName: AbilityName = 'Удар возмездия';

  constructor(n: string) {
    super(n);
  }

  getStrength() {
    const resultStrength = this.strength * this.strengthMultiplier;
    this.strengthMultiplier = 1;
    return Math.floor(resultStrength);
  }

  ability() {
    this.strengthMultiplier = 1.3;
  }
}

export class Archer extends Player {
  protected abilityUsed = false;
  type: PlayerType = 'Лучник';
  abilityName: AbilityName = 'Огненные стрелы';

  constructor(n: string) {
    super(n);
  }

  ability(player: Player) {
    if (!this.abilityUsed) {
      player.tickDamage = 2;
      this.canCauseDamage = false;
    }
    this.abilityUsed = true;
  }
}

export class Mage extends Player {
  type: PlayerType = 'Маг';
  abilityName: AbilityName = 'Заворожение';

  constructor(n: string) {
    super(n);
  }

  ability(player: Player) {
    player.stunned = true;
    this.canCauseDamage = false;
  }
}
