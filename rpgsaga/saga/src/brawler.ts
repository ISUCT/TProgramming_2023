import { Logger } from './logger';
import { Player } from './player';

export class Brawler extends Player {
  // Самый слабый боец без способностей

  public className = 'Боец';
  public abilityName = 'Отсутствует';
  public abilityDescription = '';
  public abilityPower = 0;
  public maxMana = 0;
  public mana = this.maxMana;

  useAbility(defender: Player) {
    Logger.abilityLog(this, defender);
  }
}
