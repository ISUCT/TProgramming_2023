import { Character } from './character';
import { CharacterClass } from './characterClasses';
import { CharacterGenerator } from './characterGenerators/characterGenerator';
import { ArcherGenerator } from './characterGenerators/archerGenerator';
import { KnightGenerator } from './characterGenerators/knightGenerator';
import { MageGenerator } from './characterGenerators/mageGenerator';

export class CharacterFactory {
  private factory: CharacterGenerator;

  private set(characterClass: CharacterClass) {
    if (characterClass === CharacterClass.archer) {
      this.factory = new ArcherGenerator();
    } else if (characterClass === CharacterClass.knight) {
      this.factory = new KnightGenerator();
    } else if (characterClass === CharacterClass.mage) {
      this.factory = new MageGenerator();
    }
  }

  public getCharacter(characterClass: CharacterClass): Character {
    this.set(characterClass);
    return this.factory.createCharacter();
  }
}
