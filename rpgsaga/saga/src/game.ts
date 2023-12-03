import { Bina } from './bina';
import { Character } from './character';
import { CharacterClass } from './characterClasses';
import { CharacterFactory } from './characterFactory';
import { getRandomEnumValue } from './randomMath';
import { ArrayItem } from './arrayItem';

export class Game {
  private players: Character[] = [];
  private currentPlayers: ArrayItem[] = [];
  private newPlayerIndex: number;
  private quantityOfPlayers: number;

  private bina: Bina = new Bina();

  constructor(quantityOfPlayers: number) {
    this.quantityOfPlayers = quantityOfPlayers;
    this.newPlayerIndex = 2;

    const factory: CharacterFactory = new CharacterFactory();
    for (let i = 0; i < this.quantityOfPlayers; i++) {
      const character = factory.getCharacter(getRandomEnumValue(CharacterClass));
      this.players.push(character);
    }

    this.currentPlayers = [new ArrayItem(this.players[0], 0), new ArrayItem(this.players[1], 1)];
  }

  private isPlayerDead(player: Character) {
    return player.healthPoints <= 0 ? true : false;
  }

  private isGameOver() {
    return this.quantityOfPlayers <= 1 ? true : false;
  }

  private swapCurrentPlayers() {
    const temp = this.currentPlayers[0];
    this.currentPlayers[0] = this.currentPlayers[1];
    this.currentPlayers[1] = temp;
  }

  private findDeadBody(): number {
    for (let i = 0; i < this.currentPlayers.length; i++) {
      if (this.isPlayerDead(this.currentPlayers[i].player)) {
        this.quantityOfPlayers -= 1;
        return i;
      }
    }

    return null;
  }

  private replaceDeadBody(deadPlayerIndex: number) {
    if (this.quantityOfPlayers > 2 && this.isPlayerDead(this.currentPlayers[deadPlayerIndex].player)) {
      this.currentPlayers[deadPlayerIndex] = new ArrayItem(this.players[this.newPlayerIndex], this.newPlayerIndex);
      this.newPlayerIndex += 1;
    }
  }

  private findWinner(): Character {
    for (let i = 0; i < this.currentPlayers.length; i++) {
      if (!this.isPlayerDead(this.currentPlayers[i].player)) {
        return this.currentPlayers[i].player;
      }
    }
  }

  private announceWinner() {
    const winner = this.findWinner();
    console.log(`The winner is ${winner.name} (${winner.class})!`);
  }

  // private playOneRound();

  public start() {
    for (; !this.isGameOver(); ) {
      this.bina.attack(this.currentPlayers[0], this.currentPlayers[1]);

      this.swapCurrentPlayers();

      const deadBodyIndex = this.findDeadBody();
      if (deadBodyIndex !== null) {
        this.replaceDeadBody(deadBodyIndex);
      }
    }

    this.announceWinner();
  }
}
