import { Archer } from "../src/RPGSaga/GameClasses/Archer";


describe("Archer", () => {
    let archer: Archer;

    beforeEach(() => {
        archer = new Archer(80, 15, "Женя");
    });

    it("should have correct initial properties", () => {
        expect(archer.maxHealth).toBe(80);
        expect(archer.currentHealth).toBe(80);
        expect(archer.strength).toBe(15);
        expect(archer.name).toBe("Женя");
        expect(archer.abilityName).toBe("Огненная стрела");
        expect(archer.maxAbilityUsages).toBe(2);
        expect(archer.abilityLeft).toBe(2);
    });

    it("should decrease ability usages and return ability action if available", () => {
        const action = archer.ability();
        expect(action).toEqual(["Огненная стрела", 5.0]);
        expect(archer.abilityLeft).toBe(1);
    });

    it("should decrease ability usages and return attack action if no ability usages left", () => {
        archer.abilityLeft = 0;
        const action = archer.ability();
        expect(action).toEqual(["наносит урон", 15]);
        expect(archer.abilityLeft).toBe(0);
    });

    it("should return correct string representation", () => {
        expect(archer.toString()).toBe("(Лучник) Женя");
    });

    it("should have correct attack action", () => {
        const action = archer.attack();
        expect(action).toEqual(["наносит урон", 15]);
    });

    it("should inherit and override checkStatus method correctly", () => {
        archer.setDebuff("Огненная стрела");
        let status = archer.checkStatus();
        expect(status).toEqual(["Огненная стрела", 3.0]);

        archer.setDebuff("Заворожение");
        status = archer.checkStatus();
        expect(status).toEqual(["Заворожение", 0.0]);

        archer.setDebuff("Other debuff");
        status = archer.checkStatus();
        expect(status).toEqual([" ", 0.0]);
    });

    it("should inherit and override checkDeath method correctly", () => {
        archer.currentHealth = 0;
        expect(archer.checkDeath()).toBe(true);

        archer.currentHealth = -10;
        expect(archer.checkDeath()).toBe(true);

        archer.currentHealth = 50;
        expect(archer.checkDeath()).toBe(false);
    });

    it("should inherit and override update method correctly", () => {
        archer.setDebuff("Огненная стрела");
        archer.update();
        expect(archer.abilityLeft).toBe(2);
        expect(archer.currentHealth).toBe(80);
        expect(archer.debuffs).toBe("");
    });
});
