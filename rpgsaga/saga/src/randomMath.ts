import { CharacterClass } from './characterClasses';

// Function to generate a random value from [min; max]
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomArrayIndex(arrayLength: number) {
  return randomIntFromInterval(0, arrayLength - 1);
}

export function getRandomEnumValue(enumeration): CharacterClass {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}
