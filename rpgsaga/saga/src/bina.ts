import { Character } from './character';

export class Bina {
  public attack(target: Character, points: number) {
    target.receiveDamage(points);
  }
}
