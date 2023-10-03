export class MathHelper {
    static isOdd(number): boolean {
        return number % 2 != 0;
    }

    static genrateRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
}