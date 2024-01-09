import { Archer } from '../heroes/archer';
import { Knight } from '../heroes/knight';
import { Mage } from '../heroes/mage';
import { getRandomInt } from './get-random-int';

const heroes = [Archer, Knight, Mage];

export function getRandomHero() {
  const randomIndex = getRandomInt(0, heroes.length - 1);

  return heroes[randomIndex];
}
