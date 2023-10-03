export class MathHelper {
    static isOdd(number): boolean {
        return number % 2 != 0;
    }

    static genrateRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    static getRandomEnumValue<T>(enumObj: T): T[keyof T] {
        const enumValues = Object.values(enumObj);
        console.log(enumObj);
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex] as T[keyof T];
      }
}