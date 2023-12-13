import { Unit } from "./unit";
import { Classes } from "./stringConsts";
import { Warrior } from "./unitClasses/warriror";
import { Archer } from "./unitClasses/archer";
import { Magican } from "./unitClasses/magican";

export class Helper{
  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  static getRandomEnumValue<T>(enumObj: T): T[keyof T] {
    const enumValues = Object.values(enumObj);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as T[keyof T];
  }

  static generateCharacter(): Unit {
    for (let i = 0; i < 1; i++){
        let character: Unit;
        switch (Helper.getRandomEnumValue(Classes)) {
          case Classes.WARRIOR:
            character = new Warrior();
            character.generateUnit();
            return character;
          case Classes.ARCHER:
            character = new Archer();
            character.generateUnit();
            return character;
          case Classes.MAGICAN:
            character = new Magican();
            character.generateUnit();
            return character;
        }
    }     
}
}
 