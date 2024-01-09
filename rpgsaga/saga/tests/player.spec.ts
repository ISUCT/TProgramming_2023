import { Archer } from "../src/RPGSaga/GameClasses/Archer";
import { Player } from "../src/RPGSaga/Player";

describe("Player class", () => {
    let player: Player;
  
    beforeEach(() => {
      player = new Archer(100, 10, "John");
    });
  
    it("should create an instance of Player", () => {
      expect(player).toBeInstanceOf(Player);
    });
  
    it("should have correct initial properties", () => {
      expect(player.maxHealth).toBe(100);
      expect(player.strength).toBe(10);
      expect(player.name).toBe("John");
      expect(player.abilityName).toBe("Огненная стрела");
      expect(player.maxAbilityUsages).toBe(2);
      expect(player.currentHealth).toBe(100);
      expect(player.abilityLeft).toBe(2);
      expect(player.debuffs).toBeUndefined();
    });
  
    it("should return correct attack values", () => {
      expect(player.attack()).toEqual(["наносит урон", 10]);
    });
  
    it("should reduce currentHealth on getDamage and return death status", () => {
      expect(player.getDamage(20)).toBe(false);
      expect(player.currentHealth).toBe(80);
      expect(player.getDamage(85)).toBe(true);
      expect(player.currentHealth).toBe(-5);
    });
  
    it("should set debuffs correctly", () => {
      expect(player.setDebuff("Огненная стрела")).toBe("Огненная стрела");
      expect(player.debuffs).toBe("Огненная стрела");
      expect(player.setDebuff("Заворожение")).toBe("Заворожение");
      expect(player.debuffs).toBe("Заворожение");
    });
  
    it("should check and return correct status values", () => {
      player.setDebuff("Огненная стрела");
      expect(player.checkStatus()).toEqual(["Огненная стрела", 3.0]);
      player.setDebuff("Заворожение");
      expect(player.checkStatus()).toEqual(["Заворожение", 0.0]);
    });
  
    it("should check and return death status correctly", () => {
      expect(player.checkDeath()).toBe(false);
      player.currentHealth = 0;
      expect(player.checkDeath()).toBe(true);
      player.currentHealth = -10;
      expect(player.checkDeath()).toBe(true);
    });
  
    it("should update properties correctly", () => {
      player.currentHealth = 50;
      player.debuffs = "Огненная стрела";
      player.abilityLeft = 0;
  
      player.update();
  
      expect(player.currentHealth).toBe(100);
      expect(player.debuffs).toBe("");
      expect(player.abilityLeft).toBe(2);
    });
  });