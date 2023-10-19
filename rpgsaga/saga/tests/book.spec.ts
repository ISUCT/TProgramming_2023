import { Book } from "../src/book";

describe("Testing movie constructor", () => {
    it("Book should be created", () => {
        const first = new Book("Book 1", 2000, "Director 1", 50);
        expect(first.title).toEqual("Book 1");
        expect(first.year).toEqual(2000);
        expect(first.director).toEqual("Director 1");
        expect(first.pages).toEqual(50);
    });
    it("Book pages lower than bound", () => {
        const first = new Book("Book 1", 2000, "Director 1", 0);
        expect(first.pages).toEqual(1);
    });
});

describe('Testing book methods', () => {
    it("Book bookmark set valid value", () => {
        const first = new Book("Book 1", 2000, "Director 1", 10);
        first.bookmark = 9;
        expect(first.bookmark).toEqual(9);
    });
    it("Book bookmark lower than valid value", () => {
        const first = new Book("Book 1", 2000, "Director 1", 10);
        first.bookmark = 0;
        expect(first.bookmark).toEqual(1);
    });
    it("Book bookmark higher the pages", () => {
        const first = new Book("Book 1", 2000, "Director 1", 10);
        first.bookmark = 11;
        expect(first.bookmark).toEqual(1);
    });
});