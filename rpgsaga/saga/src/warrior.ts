import { Player } from './player';
import { Logger } from './logger';

export class Warrior extends Player {
  public className = 'Воин';
  public abilityName = 'Удар возмездия';
  public abilityDescription = 'и нанес урон';
  public abilityPower: number = Math.ceil(this.power * 1.5);
  public maxMana = 2;
  public mana = this.maxMana;

  attack(defender: Player) {
    super.attack(defender);
  }

  useAbility(defender: Player) {
    defender.health -= this.abilityPower + defender.armor;
    Logger.abilityLog(this, defender);
    if (!this.deathChecker(defender)) {
      Logger.hpLog(defender);
    }
  }
}
