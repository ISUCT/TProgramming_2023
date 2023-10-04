export class MathHelper {
  static isOdd(number): boolean {
    return number % 2 !== 0;
  }

  static genrateRandomNumber = (minValue: number, maxValue: number) => {
    const min: number = Math.ceil(minValue);
    const max: number = Math.floor(maxValue);
    return Math.floor(Math.random() * (max - min + 1)) + minValue;
  };

  static getRandomEnumValue<T>(enumObj: T): T[keyof T] {
    const enumValues = Object.values(enumObj);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as T[keyof T];
  }

  static isWholeNumber(val: number) {
    return Math.ceil(val as number) === Math.floor(val as number);
  }
}
