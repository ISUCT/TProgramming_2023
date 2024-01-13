abstract class Animal {

    constructor(aAge: number, private aColor: string) {
    }

    abstract set age(n);
    abstract get age(): number;
    abstract toString(): string;

    animVoice(voice: string) {
        console.log(voice);
    }

}