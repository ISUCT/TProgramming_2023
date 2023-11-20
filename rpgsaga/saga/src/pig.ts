import { Animal } from './animal';
import { Herbivore } from './interfaces/herbivore';
import { PlantNames } from './enums/plantNames';
import { CarnivoreNames } from './enums/carnivoreNames';

export class Pig extends Animal implements Herbivore {
  constructor(mass: number, identificator?: string) {
    super(identificator);
    this.mass = mass;
  }

  get mass(): number {
    return this._mass;
  }

  set mass(value: number) {
    if (value >= 50) {
      this._mass = value;
    } else {
      throw new Error("Pig's mass should be 50 kg or bigger.");
    }
  }

  getSalo(): number {
    // Допускается, что количество получаемого со свиньи сала равно 20% от её массы тела
    return this._mass * 0.2;
  }

  // Текстовое представление класса
  public toString(): string {
    return `The pig id is ${this.identificator} and it's mass is ${this.mass}`;
  }

  makeSound(): string {
    return 'Oink-oink';
  }

  eatPlant(plantName: PlantNames): string {
    return `Pig "${this.identificator}" is peacefully eating a ${plantName}.`;
  }

  runFromCarnivore(carnivoreName: CarnivoreNames): string {
    return `Pig "${this.identificator}" successfully ran away from a ${carnivoreName}`;
  }
}
