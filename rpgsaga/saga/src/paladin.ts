import { Player } from './player';
import { Logger } from './logger';

export class Paladin extends Player {
  public maxArmor = this.armor;
  public className = 'Паладин';
  public abilityName = 'Молитва';
  public abilityDescription = 'Паладин удвоил броню и восстановил здоровье:';
  public abilityPower = 0;
  public damage = 0;
  public maxMana = 3;
  public mana = this.maxMana;

  attack(defender: Player) {
    super.attack(defender);
    if (defender.isAlive) {
      this.lightDamage(defender);
    }
  }

  lightDamage(defender: Player) {
    this.damage = Math.ceil(this.health * 0.05);
    defender.health -= this.damage;
    if (!this.deathChecker(defender)) {
      Logger.lightLog(this.damage);
      this.deathChecker(defender);
    }
  }

  useAbility(defender: Player) {
    this.abilityPower = Math.ceil((this.maxHealth - this.health) * 0.2) + 17;
    Logger.abilityLog(this, this);
    this.health += this.abilityPower;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
    this.armor = this.armor * 2;
    this.lightDamage(defender);
    if (!this.deathChecker(defender)) {
      Logger.hpLog(defender);
    }
  }

  winnerRegenerate(): void {
    super.winnerRegenerate();
    this.armor = this.maxArmor;
    this.abilityPower = 0;
  }
}
