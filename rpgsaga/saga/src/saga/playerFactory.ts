import { Archer, Knight, Mage } from './classes';

export function createPlayer(name: string, health: number, strength: number, type: string) {
  switch (type.toLowerCase()) {
    case 'archer':
      return new Archer(health, strength, name);

    case 'knight':
      return new Knight(health, strength, name);

    case 'mage':
      return new Mage(health, strength, name);

    default:
      return new Knight(health, strength, name);
  }
}
