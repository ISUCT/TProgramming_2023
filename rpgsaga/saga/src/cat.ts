class Cat extends Animal {

    private voice: string;
    private breed: string;

    constructor(public aAge: number, aColor: string, voice: string, breed: string, public name?: string) {
        super(aAge, aColor);
        this.voice = voice;
        this.breed = breed;
    }

    set age(n: number) {
        if (this.aAge < 1) {
            throw new Error("Возраст не может быть меньше 1");
        } else if (this.aAge > 20) {
            throw new Error("Возраст не может быть больше 20");
        } else {
            this.aAge = n;
        }
    }

    get age(): number {
        return this.aAge;
    }

    animVoice(voice: string) {
        console.log(voice);
    }

    toString(): string {
        return `the ${this.breed} cat called ${this.name}`;
    }
}