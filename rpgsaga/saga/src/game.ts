import { Hero } from './heroes/hero';
import { Messenger } from './messenger';
import { getRandomInt } from './helpers/get-random-int';
import { getRandomName } from './helpers/get-random-name';
import { getRandomHero } from './helpers/get-random-hero';
import { MAX_HEALTH, MAX_POWER } from './constants';

export class Game {
  messenger: Messenger;
  private players: Hero[] = [];

  constructor(private playersCount: number) {
    this.messenger = new Messenger();
  }

  startGame() {
    this.createPlayers();

    while (this.players.length > 1) {
      this.players.sort(() => Math.random() - 0.5);

      const fightsCount = Math.floor(this.players.length / 2);
      const names = this.players.map(player => player.name);

      for (let i = 0; i < Math.floor(this.players.length / 2); i++) {
        const firstHero = this.players[i];
        const secondHero = this.players[i + fightsCount];
        firstHero.refresh();
        secondHero.refresh();

        this.messenger.sendMessage(
          `(${firstHero.heroName}) ${firstHero.name} vs (${secondHero.heroName}) ${secondHero.name}.`,
        );
        this.makeOneFight(firstHero, secondHero);
      }

      this.players = this.players.filter(player => player.health > 0);
    }

    this.messenger.sendMessage(`\n ${this.players[0].name} побеждает!`);
  }

  private createPlayers() {
    const messenger = new Messenger();

    for (let i = 0; i < this.playersCount; i++) {
      const Hero = getRandomHero();
      const name = getRandomName();
      const health = getRandomInt(0, MAX_HEALTH);
      const power = getRandomInt(0, MAX_POWER);

      this.players.push(new Hero(health, power, name, messenger));
    }
  }

  makeOneFight(firstHero: Hero, secondHero: Hero) {
    const isFirstHeroStartFight = Math.random() < 0.5;

    while (firstHero.health > 0 && secondHero.health > 0) {
      if (isFirstHeroStartFight) {
        this.makeOneAttack(firstHero, secondHero);

        if (secondHero.health > 0) {
          this.makeOneAttack(secondHero, firstHero);
        }
      } else {
        this.makeOneAttack(secondHero, firstHero);

        if (firstHero.health > 0) {
          this.makeOneAttack(firstHero, secondHero);
        }
      }
    }

    const diedPlayer = firstHero.health <= 0 ? firstHero : secondHero;
    diedPlayer.sendDieMessage();
  }

  private makeOneAttack(attackingHero: Hero, waitingHero: Hero) {
    if (!attackingHero.isCanAttack) {
      attackingHero.isCanAttack = true;
      this.messenger.sendMessage(`${attackingHero.heroName}) ${attackingHero.name} пропускает ход`);
    } else {
      if (!attackingHero.usedAbility) {
        attackingHero.useHeroAbility(waitingHero);
      } else {
        attackingHero.attack(waitingHero);
      }
    }
  }
}
