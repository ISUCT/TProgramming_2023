export class Gun {
  readonly serialNumber: string = 's00001';
  private aMagazine: number;
  model: string;

  shotCount = 0;

  constructor(modelName: string, magazine: number, public bullets?: number) {
    this.model = modelName;
    this.magazine = magazine;
    this.bullets = this.bullets < this.magazine && this.bullets >= 0 ? this.bullets : this.magazine;
  }
  // инфо :)
  info() {
    return `You're create gun model: "${this.model}". He has a magazine for ${this.magazine} bullets and ${this.bullets} bullets.`;
  }

  // выстрел
  shot(): string {
    if (this.bullets > 0) {
      this.shotCount += 1;
      this.bullets -= 1;
      return `The gun ${this.model} fired ${this.shotCount} times`;
    } else {
      return 'You are out of ammo. Recharge';
    }
  }

  // перезарядка
  recharge(): string {
    this.bullets = this.magazine;
    return 'The magazine is being recharged';
  }

  // проверка магазина
  set magazine(magazine: number) {
    this.aMagazine = magazine >= 0 && magazine < 21 ? magazine : this.aMagazine ?? 20;
  }
  get magazine() {
    return this.aMagazine;
  }
}
