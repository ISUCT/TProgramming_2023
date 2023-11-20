export abstract class Animal {
  protected _mass: number;
  public identificator: string; // код животного на бирке, прикрепленной на ухо

  constructor(animalName?: string) {
    if (animalName) {
      this.identificator = animalName;
    } else {
      this.identificator = 'Unknown identificator';
    }
  }

  abstract makeSound(): string;
}
