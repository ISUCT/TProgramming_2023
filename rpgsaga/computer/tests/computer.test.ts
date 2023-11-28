
import { Computer } from '../src/main';
import { HDD } from '../src/main';
describe("Testing Computer", () => {
it('Test to check the test operation', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

it("Computer should be created", () => {
    const pc = new Computer("Admin", 400);
    expect(pc.name).toEqual("Admin");
    expect(pc.energy_consumption).toEqual(400);
});
it("Is get working correctly?", () => {
    const hdd = new HDD("Patriot", 1024, 400, 500);
    expect(hdd.memory).toEqual(1024)
});
})