export class Rabbit {
    private _age: number;
    breed: string;
    color: string;
  
    constructor(rabAge: number, rabBreed: string, rabColor: string, public rabName?: string) {
      this.age = rabAge;
      this.breed = rabBreed;
      this.color = rabColor;
      this.rabName = rabName;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(n: number) {
        this._age = n >= 1 && n < 12 ? n : this._age ?? 1;
    }
  
    get name(): string {
      return this.rabName;
    }
  
    public set name(str: string) {
      this.rabName = str;
    }
  }