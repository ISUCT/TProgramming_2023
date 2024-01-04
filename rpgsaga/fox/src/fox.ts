export default class Fox {
  private readonly aName: string;
  private aYear: number;
  color: string;

  constructor(name?: string, color?: string, year?: number) {
    this.aName = name || 'unknown';
    this.color = color || 'unknown';
    if (year !== undefined) {
      this.year = year;
    }
  }

  getView(): string {
    return `
        /\\     /\\
       /  \\___/  \\
      /  ( o o )   \\
     /   |  Y  |    \\
    /   )|  -  |(    \\
   /   / |-----| \\   \\
  /    ) |-----|  (   \\
  \\______|-----|______/
        /       \\
       /  /|   |\\ \\
      /  / |___| \\ \\
     |  /        \\  |
     |__|        |__|
      `;
  }

  get name(): string {
    return this.aName;
  }

  get year(): number {
    return this.aYear;
  }

  set year(year: number) {
    if (year < 2000 || year >= 2023) {
      throw new Error('Invalid year. Year must be between 2000 (inclusive) and 2023 (exclusive).');
    }

    this.aYear = year;
  }

  info(): string {
    if (this.aName === 'unknown' && this.color === 'unknown' && this.year === undefined) {
      return 'No info, only view';
    }
    return `Your fox is named ${this.name} , has ${this.color} coat color, and is ${this.year} years old.`;
  }

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  // Лисица издаёт звук
  makeSound(): string {
    return 'The fox makes a squeaky sound.';
  }

  // Лисица охотится
  hunt(prey: string): string {
    return `${this.name} hunts ${prey}`;
  }
}
