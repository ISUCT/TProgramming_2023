import { Movie } from "../src/movie";

describe("Testing movie constructor", () => {
    it("Movie should be created", () => {
        const first = new Movie("Movie 1", 2023, "Director 1");
        expect(first.title).toEqual("Movie 1");
        expect(first.yearPremiere).toEqual(2023);
        expect(first.director).toEqual("Director 1");
    });
    it("Movie year premiere lower than bound", () => {
        const first = new Movie("Movie 1", 1710, "Director 1");
        expect(first.yearPremiere).toEqual(1895);
    });
    it("Movie year premiere higher than bound", () => {
        const first = new Movie("Movie 1", 2077, "Director 1");
        expect(first.yearPremiere).toEqual(1895);
    });
});

describe('Testing movie methods', () => {
    it("Movie year premiere set valid value", () => {
        const first = new Movie("Movie 1", 2000, "Director 1");
        first.year = 2023;
        expect(first.yearPremiere).toEqual(2023);
    });
    it("Movie year premiere lower than valid value", () => {
        const first = new Movie("Movie 1", 2000, "Director 1");
        first.year = 1888;
        expect(first.yearPremiere).toEqual(1895);
    });
    it("Movie year premiere higher than valid value", () => {
        const first = new Movie("Movie 1", 2000, "Director 1");
        first.year = 2024;
        expect(first.yearPremiere).toEqual(1895);
    });
});