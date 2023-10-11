import { Player } from './player';
import { Logger } from './logger';

export class Berserk extends Player {
  public maxPower = this.power;
  public className = 'Берсерк';
  public abilityName = 'Яростный удар';
  public abilityDescription = 'и оба игрока получили урон:';
  public abilityPower = 0;
  public maxMana = 1;
  public mana = this.maxMana;
  public damageBuff = 0;

  useAbility(defender: Player) {
    this.abilityPower = Math.ceil(0.1 * this.health);
    this.health -= this.abilityPower;
    Logger.abilityLog(this, defender);
    defender.health -= this.abilityPower;
    this.damageBuff = Math.ceil((this.maxHealth - this.health) * 0.3);
    Logger.rageLog(this.damageBuff);
    this.power += this.damageBuff;
    this.deathChecker(defender);
  }

  winnerRegenerate(): void {
    super.winnerRegenerate();
    this.abilityPower = 0;
    this.damageBuff = 0;
    this.power = this.maxPower;
  }
}
