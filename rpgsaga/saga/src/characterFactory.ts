import { Character } from './character';
import { CharacterClass } from './characterClasses';
import { ICharacterGenerator } from './characterGenerators/ICharacterGenerator';
import { ArcherGenerator } from './characterGenerators/archerGenerator';
import { KnightGenerator } from './characterGenerators/knightGenerator';
import { MageGenerator } from './characterGenerators/mageGenerator';
import { getRandomEnumValue } from './randomMath';

export class CharacterFactory {
  private _factory: ICharacterGenerator;

  private set(characterClass: CharacterClass) {
    if (characterClass === CharacterClass.archer) {
      this._factory = new ArcherGenerator();
    } else if (characterClass === CharacterClass.knight) {
      this._factory = new KnightGenerator();
    } else if (characterClass === CharacterClass.mage) {
      this._factory = new MageGenerator();
    }
  }

  public getCharacter(
    characterClass: CharacterClass,
    randomNumberGenerator: (min: number, max: number) => number,
  ): Character {
    this.set(characterClass);
    return this._factory.createCharacter(randomNumberGenerator);
  }

  public generatePlayers(
    quantityOfPlayers: number,
    randomNumberGenerator: (min: number, max: number) => number,
  ): Character[] {
    const players: Character[] = [];

    for (let i = 0; i < quantityOfPlayers; i++) {
      const character = this.getCharacter(getRandomEnumValue(CharacterClass), randomNumberGenerator);
      players.push(character);
    }

    return players;
  }
}
