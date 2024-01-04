// Heroes
import { Warrior as WarriorHero } from '../heroes/warriorHero';
import { Archer as ArcherHero } from '../heroes/archerHero';
import { Dragon as DragonHero } from '../heroes/dragonHero';
import { Magician as MagicianHero } from '../heroes/magicianHero';

export const NAMES: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

export enum HEROES {
  Warrior = 'Warrior',
  Archer = 'Archer',
  Dragon = 'Dragon',
  Magician = 'Magician',
}

export const heroClasses = {
  [HEROES.Warrior]: WarriorHero,
  [HEROES.Archer]: ArcherHero,
  [HEROES.Dragon]: DragonHero,
  [HEROES.Magician]: MagicianHero,
};

// Damage
export enum DamageType {
  Physical = 'Physical',
  Shot = 'Shot',
  Poison = 'Poison',
  Fire = 'Fire',
  Ice = 'Ice',
  Electric = 'Electric',
}

type DamageMap = {
  [key in DamageType]: number;
};

export const maxDamageValues: DamageMap = {
  [DamageType.Physical]: 60,
  [DamageType.Shot]: 62,
  [DamageType.Fire]: 67,

  // for magician
  [DamageType.Poison]: 45,
  [DamageType.Ice]: 65,
  [DamageType.Electric]: 90,
};

type DamageInfo = {
  damage: number;
  ultName: string;
};

export const criticalDamage: Record<DamageType, DamageInfo> = {
  // does heavy damage once
  [DamageType.Physical]: { damage: 10, ultName: 'Retaliatory Strike' },
  // does heavy damage once
  [DamageType.Shot]: { damage: 10, ultName: 'Precise Shot' },
  // every turn - 2 xp from the enemy
  [DamageType.Fire]: { damage: 2, ultName: 'Great Arson' },

  // every turn - 2 xp from the enemy
  [DamageType.Poison]: { damage: 2, ultName: 'Toxic Burst' },
  // freezing
  [DamageType.Ice]: { damage: 0, ultName: 'Freeze' },
  // does heavy damage once
  [DamageType.Electric]: { damage: 20, ultName: 'Thunderstruck' },
};

export const chanceCriticalDamage: DamageMap = {
  [DamageType.Physical]: 0.3,
  [DamageType.Shot]: 0.3,
  [DamageType.Fire]: 0.2,

  [DamageType.Poison]: 0.2,
  [DamageType.Ice]: 0.3,
  [DamageType.Electric]: 0.2,
};

// Health
type HeroesMap = {
  [key in HEROES]: number;
};

export const maxHealthValue: HeroesMap = {
  [HEROES.Warrior]: 150,
  [HEROES.Archer]: 125,
  [HEROES.Dragon]: 175,
  [HEROES.Magician]: 100,
};
