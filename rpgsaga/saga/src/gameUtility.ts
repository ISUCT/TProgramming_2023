import { cloneDeep } from 'lodash';

import { ArrayItem } from './arrayItem';
import { Character } from './character';
import { AttackType } from './attackType';

export class GameUtility {
  private announceDeadBody(deadBody: Character): void {
    console.log(`${deadBody.name} (${deadBody.class}) has died!`);
  }

  public findDeadBodies(players: ArrayItem[]): number[] {
    const deadBodiesIndexes: number[] = [];

    for (let i = 0; i < players.length; i++) {
      const currectPlayer = players[i].player;

      if (this.isPlayerDead(currectPlayer)) {
        deadBodiesIndexes.push(i);

        this.announceDeadBody(currectPlayer);
      }
    }

    if (deadBodiesIndexes.length > 0) {
      return deadBodiesIndexes;
    } else {
      return null;
    }
  }

  private isPlayerDead(player: Character): boolean {
    return player.healthPoints <= 0 ? true : false;
  }

  public replaceDeadBodies(
    players: Character[],
    currentPlayers: ArrayItem[],
    newPlayerIndex: number,
    deadPlayerIndexes: number[],
  ): number {
    let updatedNewPlayerIndex: number = newPlayerIndex;

    for (let i = 0; i < deadPlayerIndexes.length; i++) {
      const deadPlayerIndex: number = deadPlayerIndexes[i];

      if (this.isPlayerDead(currentPlayers[deadPlayerIndex].player)) {
        currentPlayers[deadPlayerIndex] = new ArrayItem(
          cloneDeep(players[updatedNewPlayerIndex]),
          updatedNewPlayerIndex,
        );

        updatedNewPlayerIndex += 1;
      }
    }

    return updatedNewPlayerIndex;
  }

  public restoreCurrentPlayers(currentPlayers: ArrayItem[], players: Character[]): void {
    for (let i = 0; i < currentPlayers.length; i++) {
      currentPlayers[i].player = cloneDeep(players[currentPlayers[i].index]);
    }
  }

  private countDeadPlayers(players: ArrayItem[]): number {
    let counter = 0;
    for (let i = 0; i < players.length; i++) {
      if (this.isPlayerDead(players[i].player)) {
        counter += 1;
      }
    }

    return counter;
  }

  public findWinner(currentPlayers: ArrayItem[]): Character {
    const deadPlayersCount: number = this.countDeadPlayers(currentPlayers);
    if (deadPlayersCount === 1) {
      for (let i = 0; i < currentPlayers.length; i++) {
        const currentPlayer = currentPlayers[i].player;
        if (!this.isPlayerDead(currentPlayer)) {
          return currentPlayer;
        }
      }
    }

    return null;
  }

  public chooseAnAttackType(
    isSpellAvailable: boolean,
    randomNumberGenerator: (min: number, max: number) => number,
  ): AttackType {
    if (!isSpellAvailable) {
      return AttackType.attack;
    }

    const randomNumber = randomNumberGenerator(1, 10);
    if (randomNumber <= 3) {
      return AttackType.spell;
    } else {
      return AttackType.attack;
    }
  }
}
