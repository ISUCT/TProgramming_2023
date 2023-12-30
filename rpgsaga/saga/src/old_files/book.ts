import { Art } from './art';

export class Book extends Art {
    toString(): string {
        return `${this.title}, ${this.director}, ${this.year}`;
    }

    pages: number;
    private pageBookmark: number = 0;

    constructor(title: string, year: number, director: string, pages: number) {
        super(title, year, director);
        this.pages = pages >= 1 ? pages : 1;
    }

    set bookmark(page: number) {
        this.pageBookmark = page > 0 && page <= this.pages ? page : 1;
    }

    get bookmark(): number {
        return this.pageBookmark;
    }
}