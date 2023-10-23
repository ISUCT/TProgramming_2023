export class Rabbit {
    private _age: number;
    private breed: string;
    private color: string;
    private _name: string;
  
    constructor(rabAge: number, rabBreed: string, rabColor: string) {
      this.age = rabAge;
      this.breed = rabBreed;
      this.color = rabColor;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(n: number) {
      if (n < 0 || n > 12) {
        console.log('Недопустимый возраст!');
      } else {
        this._age = n;
      }
    }
  
    get name(): string {
      return this._name;
    }
  
    public set name(str: string) {
      this._name = str;
    }
  }