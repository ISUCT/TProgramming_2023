import { Player } from './player';
import { Logger } from './logger';
import { randomNumber } from './game';

export class Mage extends Player {
  public className = 'Маг';
  public abilityName = 'Тайное знание';
  public abilityDescription = 'Описание меняется в зависимости от способности';
  public abilityPower = 0;
  public firePower = 22;
  public icePower = 20;
  public manaStealPower = 55;
  public maxMana = 3;
  public mana = this.maxMana;

  attack(defender: Player) {
    if (defender.isOnFire === true) {
      defender.getFireDamage(this);
    }
    super.attack(defender);
  }

  useAbility(defender: Player) {
    switch (randomNumber(0, 2)) {
      case 0:
        this.iceArrow(defender);
        break;
      case 1:
        this.fireBall(defender);
        break;
      case 2:
        this.manaBreak(defender);
        break;
    }
  }

  iceArrow(defender: Player) {
    this.abilityPower = this.icePower;
    this.abilityName = 'Ледяная стрела';
    this.abilityDescription = 'Враг заморожен на 1 ход и получает урон:';
    defender.isFrozen = true;
    defender.health -= this.abilityPower;
    Logger.abilityLog(this, defender);
    if (!this.deathChecker(defender)) {
      Logger.hpLog(defender);
    }
  }

  fireBall(defender: Player) {
    this.abilityPower = this.firePower;
    this.abilityName = 'Огненный шар';
    this.abilityDescription = 'Враг подожжен и получает урон:';
    defender.isOnFire = true;
    defender.health -= this.firePower;
    Logger.abilityLog(this, defender);
    if (defender.health <= 0) {
      Logger.deathLog(defender);
      defender.isAlive = false;
    }
  }

  manaBreak(defender: Player) {
    this.abilityName = 'Уничтожение маны';
    if (defender.mana > 0) {
      this.abilityPower = this.manaStealPower;
      this.abilityDescription = 'и уничтожает у противника 1 маны, нанося урон:';
      defender.mana--;
    } else {
      this.abilityPower = this.manaStealPower * 2;
      this.abilityDescription = 'Мана противника кончилась, маг уничтожает жизненную силу врага:';
    }
    Logger.abilityLog(this, defender);
    defender.health -= this.abilityPower;
    this.deathChecker(defender);
  }
}
