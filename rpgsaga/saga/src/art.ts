export abstract class Art {
    title: string;
    year1: number;
    director: string;
    abstract toString(): string;

    constructor(title: string, year: number, director: string) {
        this.title = title;
        this.year1 = year;
        this.director = director;
    }

    set year(year: number) {
        this.year1 = year;
    }

    get year(): number {
        return this.year1;
    }
}