import { Player } from './player';
import { Logger } from './logger';

export class Archer extends Player {
  public className = 'Лучник';
  public abilityName = 'Огненные стрелы';
  public abilityDescription = 'и поджег врага с уроном';
  public firePower = 8;
  public abilityPower = this.firePower;
  public maxMana = 1;
  public mana = this.maxMana;

  attack(defender: Player) {
    if (defender.isOnFire === true) {
      defender.getFireDamage(this);
    }
    super.attack(defender);
  }

  useAbility(defender: Player) {
    defender.isOnFire = true;
    Logger.abilityLog(this, defender);
    super.attack(defender);
    this.deathChecker(defender);
  }
}
