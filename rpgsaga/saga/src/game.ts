import { Archer, Knight, Mage } from './heroes';
import { Logger } from './logger';
import { Player } from './player';
import { randomInt, shuffle } from './utils';

export class Game {
  protected players: Player[] = [];
  protected readonly playerName = ['Winston', 'Carl', 'John', 'Denny'];

  constructor(playersCount: number) {
    for (let i = 0; i < playersCount; i++) {
      const playerType = randomInt(0, 2);
      const playerName = randomInt(0, 3);

      let player: Player;

      switch (playerType) {
        case 0:
          player = new Knight(this.playerName[playerName]);
          break;
        case 1:
          player = new Mage(this.playerName[playerName]);
          break;
        case 2:
          player = new Archer(this.playerName[playerName]);
      }

      this.players.push(player);
    }
  }

  start() {
    let shuffledPlayers = shuffle(this.players);
    let round = 1;

    while (shuffledPlayers.length > 1) {
      const winners: Player[] = [];

      console.log('');
      console.log(`Кон ${round}.`);

      for (let i = 0; i < shuffledPlayers.length - 1; i += 2) {
        winners.push(this.fight(shuffledPlayers[i], shuffledPlayers[i + 1]));
        console.log('');
      }
      round++;

      shuffledPlayers = winners;
    }
  }

  fight(player0: Player, player1: Player) {
    let turn = 0;

    player0.health = player0.startHealth;
    player1.health = player1.startHealth;

    Logger.announce(player0, player1);

    while (player0.health > 0 && player1.health > 0) {
      const attackingPlayer = !turn ? player0 : player1;
      const defendingPlayer = !turn ? player1 : player0;

      turn = Number(!turn);

      if (attackingPlayer.stunned) {
        attackingPlayer.stunned = false;
        continue;
      }

      let abilityUsed = false;
      let damageCaused = 0;

      if (randomInt(0, 1)) {
        attackingPlayer.ability(defendingPlayer);
        abilityUsed = true;
      }

      if (attackingPlayer.canCauseDamage) {
        damageCaused = attackingPlayer.getStrength();
        defendingPlayer.health -= damageCaused;
      }

      if (abilityUsed && damageCaused) {
        Logger.abilityAndDamage(attackingPlayer, defendingPlayer, damageCaused);
      } else if (abilityUsed && !damageCaused) {
        Logger.castAbility(attackingPlayer);
      } else if (!abilityUsed && damageCaused) {
        Logger.makeDamage(attackingPlayer, defendingPlayer, damageCaused);
      }

      attackingPlayer.health -= attackingPlayer.tickDamage;
      defendingPlayer.health -= defendingPlayer.tickDamage;

      attackingPlayer.canCauseDamage = true;
      defendingPlayer.canCauseDamage = true;
    }

    player0.tickDamage = 0;
    player1.tickDamage = 0;

    let winner: Player;

    if (player0.health < 0) {
      Logger.death(player0);
      winner = player1;
    } else {
      Logger.death(player1);
      winner = player0;
    }

    return winner;
  }
}
