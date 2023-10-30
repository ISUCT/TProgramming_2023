import { Birthday } from "../src/birthday";

describe('Testing movie methods', () => {
    it("Birthdates are the same", () => {
        const now = new Date();
        const first = new Birthday(now.getDate(), now.getMonth(), now.getFullYear());
        expect(first.age).toEqual("0 days, 0 months, 0 years");
    });
    it("Date of birth before the current date", () => {
        const first = new Birthday(29, 8, 2004);
        const now = new Date();
        const dateBirth = new Date(2004, 8, 29)
        const days = now.getDate() - dateBirth.getDate();
        const months = now.getMonth() - dateBirth.getMonth() + 1;
        const years = now.getFullYear() - dateBirth.getFullYear();
        const output = `${days} days, ${months} months, ${years} years`;
        expect(first.age).toEqual(output);
    });
    it("Date of birth after the current date", () => {
        const first = new Birthday(13, 10, 2077);
        expect(first.age).toEqual("Invalid date");
    });
});