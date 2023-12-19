class Fox {
    private name: string;
    private age: number;
    private color: string;
  
    constructor(name: string, age: number, color: string) {
      if (!name || !color || age < 0) {
        throw new Error("Invalid arguments");
      }
      this.name = name;
      this.age = age;
      this.color = color;
    }
  
    public introduce(): string {
      return `Hello, I am ${this.name}, a ${this.color} fox and I am ${this.age} years old.`;
    }
  
    public makeSound(): string {
      return "Ring-ding-ding-ding-dingeringeding!";
    }
  
    public getView(): number[] {
      const asciiCodes: number[] = [];
      for (let i = 0; i < this.name.length; i++) {
        asciiCodes.push(this.name.charCodeAt(i));
      }
      return asciiCodes;
    }
  
    public toString(): string {
      return this.introduce();
    }
  }