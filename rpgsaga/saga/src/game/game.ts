import { Archer } from '../hero/archer';
import { Hero } from '../hero/hero';
import { Knight } from '../hero/knight';
import { Mage } from '../hero/mage';
import { Logger } from '../logger/logger';

const MAX_HEALTH = 200;
const MAX_STRENGTH = 20;

const heroes = [Archer, Knight, Mage];
const names = ['Artem', 'Sergey', 'Anna', 'Oksana', 'Yulya', 'Aleksey', 'German', 'Kseniya'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export class Game {
  players: Hero[] = [];
  logger: Logger;

  constructor(playersCount: number) {
    this.createPlayers(playersCount);
    this.logger = new Logger();
  }

  createPlayers(playersCount: number) {
    const logger = new Logger();

    for (let i = 0; i < playersCount; i++) {
      const randomNum = getRandomInt(3);
      const Hero = heroes[randomNum];

      const nameIndex = getRandomInt(names.length);
      const name = names[nameIndex];
      const health = getRandomInt(MAX_HEALTH);
      const strength = getRandomInt(MAX_STRENGTH);

      this.players.push(new Hero(name, health, strength, logger));
    }
  }

  startGame() {
    while (this.players.length > 1) {
      // перемешивание массива
      this.players.sort(() => Math.random() - 0.5);

      for (let i = 0; i < Math.floor(this.players.length / 2); i++) {
        const player1 = this.players[i];
        const player2 = this.players[i + 1];
        this.battle(player1, player2);
      }

      this.players = this.players.filter(player => player.currentHealth > 0);
    }

    this.logger.log(`${this.players[0].name} побеждает!`);
  }

  battle(player1: Hero, player2: Hero) {
    this.logger.log(`(${player1.heroType}) ${player1.name} vs (${player2.heroType}) ${player2.name}.`);

    player1.refreshHero();
    player2.refreshHero();

    while (player1.currentHealth > 0 && player2.currentHealth > 0) {
      if (Math.random() < 0.5) {
        this.attackOpponent(player1, player2);

        if (player2.currentHealth > 0) {
          this.attackOpponent(player2, player1);
        }
      } else {
        this.attackOpponent(player2, player1);

        if (player1.currentHealth > 0) {
          this.attackOpponent(player1, player2);
        }
      }
    }

    if (player1.currentHealth <= 0) {
      this.logger.log(`(${player1.heroType}) ${player1.name} погибает.`);
      this.players = this.players.filter(player => player !== player1);
    } else {
      this.logger.log(`(${player2.heroType}) ${player2.name} погибает.`);
      this.players = this.players.filter(player => player !== player2);
    }
  }

  attackOpponent(player1: Hero, player2: Hero) {
    if (player1.canWalk) {

      if (!player1.usedAbility) {
        player1.useAbility(player2);
      } else {
        player1.attack(player2);
      }
      
    } else {
      player1.canWalk = true;
    }
  }
}
