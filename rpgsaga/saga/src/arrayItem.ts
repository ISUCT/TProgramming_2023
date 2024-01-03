import { Character } from './character';

export class ArrayItem {
  private _player: Character;
  private _index: number;

  get player() {
    return this._player;
  }

  set player(value: Character) {
    this._player = value;
  }

  get index() {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  constructor(player: Character, index: number) {
    this._player = player;
    this._index = index;
  }
}
