import { Mage } from "../src/RPGSaga/GameClasses/Mage";


describe("Knight", () => {
    let mage: Mage;

    beforeEach(() => {
        mage = new Mage(150, 20, "Коля");
    });

    it("should have correct initial properties", () => {
        expect(mage.maxHealth).toBe(150);
        expect(mage.currentHealth).toBe(150);
        expect(mage.strength).toBe(20);
        expect(mage.name).toBe("Коля");
        expect(mage.abilityName).toBe("Заворожение");
        expect(mage.maxAbilityUsages).toBe(2);
        expect(mage.abilityLeft).toBe(2);
    });

    it("should decrease ability usages and return ability action if available", () => {
        const action = mage.ability();
        expect(action).toEqual(["Заворожение", 0.0]);
        expect(mage.abilityLeft).toBe(1);
    });

    it("should decrease ability usages and return attack action if no ability usages left", () => {
        mage.abilityLeft = 0;
        const action = mage.ability();
        expect(action).toEqual(["наносит урон", 20]);
        expect(mage.abilityLeft).toBe(0);
    });

    it("should return correct string representation", () => {
        expect(mage.toString()).toBe("(Маг) Коля");
    });

    it("should have correct attack action", () => {
        const action = mage.attack();
        expect(action).toEqual(["наносит урон", 20]);
    });

    it("should inherit and override checkStatus method correctly", () => {
        mage.setDebuff("Огненная стрела");
        let status = mage.checkStatus();
        expect(status).toEqual(["Огненная стрела", 3.0]);

        mage.setDebuff("Заворожение");
        status = mage.checkStatus();
        expect(status).toEqual(["Заворожение", 0.0]);

        mage.setDebuff("Other debuff");
        status = mage.checkStatus();
        expect(status).toEqual([" ", 0.0]);
    });

    it("should inherit and override checkDeath method correctly", () => {
        mage.currentHealth = 0;
        expect(mage.checkDeath()).toBe(true);

        mage.currentHealth = -10;
        expect(mage.checkDeath()).toBe(true);

        mage.currentHealth = 50;
        expect(mage.checkDeath()).toBe(false);
    });

    it("should inherit and override update method correctly", () => {
        mage.setDebuff("Заворожение");
        mage.update();
        expect(mage.abilityLeft).toBe(2);
        expect(mage.currentHealth).toBe(150);
        expect(mage.debuffs).toBe("");
    });
});
