import { Character } from './character';

export class ArrayItem {
  public player: Character;
  public index: number;

  constructor(player: Character, index: number) {
    this.player = player;
    this.index = index;
  }
}
