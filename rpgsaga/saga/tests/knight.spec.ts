import { Knight } from "../src/RPGSaga/GameClasses/Knight";


describe("Knight", () => {
    let knight: Knight;

    beforeEach(() => {
        knight = new Knight(50, 10, "Вася");
    });

    it("should have correct initial properties", () => {
        expect(knight.maxHealth).toBe(50);
        expect(knight.currentHealth).toBe(50);
        expect(knight.strength).toBe(10);
        expect(knight.name).toBe("Вася");
        expect(knight.abilityName).toBe("Удар возмездия");
        expect(knight.maxAbilityUsages).toBe(2);
        expect(knight.abilityLeft).toBe(2);
    });

    it("should decrease ability usages and return ability action if available", () => {
        const action = knight.ability();
        expect(action).toEqual(["Удар возмездия", Math.floor(knight.strength * 1.3)]);
        expect(knight.abilityLeft).toBe(1);
    });

    it("should decrease ability usages and return attack action if no ability usages left", () => {
        knight.abilityLeft = 0;
        const action = knight.ability();
        expect(action).toEqual(["наносит урон", 10]);
        expect(knight.abilityLeft).toBe(0);
    });

    it("should return correct string representation", () => {
        expect(knight.toString()).toBe("(Рыцарь) Вася");
    });

    it("should have correct attack action", () => {
        const action = knight.attack();
        expect(action).toEqual(["наносит урон", 10]);
    });

    it("should inherit and override checkStatus method correctly", () => {
        knight.setDebuff("Огненная стрела");
        let status = knight.checkStatus();
        expect(status).toEqual(["Огненная стрела", 3.0]);

        knight.setDebuff("Заворожение");
        status = knight.checkStatus();
        expect(status).toEqual(["Заворожение", 0.0]);

        knight.setDebuff("Other debuff");
        status = knight.checkStatus();
        expect(status).toEqual([" ", 0.0]);
    });

    it("should inherit and override checkDeath method correctly", () => {
        knight.currentHealth = 0;
        expect(knight.checkDeath()).toBe(true);

        knight.currentHealth = -10;
        expect(knight.checkDeath()).toBe(true);

        knight.currentHealth = 50;
        expect(knight.checkDeath()).toBe(false);
    });

    it("should inherit and override update method correctly", () => {
        knight.setDebuff("Удар возмездия");
        knight.update();
        expect(knight.abilityLeft).toBe(2);
        expect(knight.currentHealth).toBe(50);
        expect(knight.debuffs).toBe("");
    });
});
