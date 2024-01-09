import { getRandomInt } from './get-random-int';

const names = [
  'Dorian',
  'Seren',
  'Ronan',
  'Elara',
  'Lyraeth',
  'Calder',
  'Kaelan',
  'Arwyn',
  'Thorne',
  'Seraphina',
  'Galen',
  'Eveline',
  'Lillian',
];

export function getRandomName() {
  const randomIndex = getRandomInt(0, names.length - 1);

  return names[randomIndex];
}
