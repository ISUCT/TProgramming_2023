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
        if (this._age < 1) {
            throw new Error("Возраст не может быть меньше 1");
        } else if (this._age > 12) {
            throw new Error("Возраст не может быть больше 12");
        } else {
            this._age = n;
        }
    }
  
    get name(): string {
      return this.rabName;
    }
  
    set name(str: string) {
      this.rabName = str;
    }

    voice() {
        console.log("!SCREECHING!")
    }

    toString(): string {
        return `the ${this.breed} rabbit called ${this.rabName}`;
    }
  }