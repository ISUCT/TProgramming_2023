export class Gun {
  readonly serialNumber: string = 's52001';
  caliber: number;
  model: string;

  magazin = 20;

  constructor(modelName: string, public bullets: number, gunCaliber?: number) {
    this.model = modelName;
    this.bullets = bullets;
    this.caliber = gunCaliber;
  }

  // выстрел
  shot(): string {
    return `The Model ${this.model} pistol fired`;
  }

  // перезарядка
  recharge(): string {
    return 'The magazine is being recharged';
  }

  // проверка магазина
  fullMagazin(): string {
    this.bullets = this.bullets === undefined ? 0 : this.bullets;
    if (this.magazin === this.bullets) {
      return 'magazine full';
    } else if (this.bullets > this.magazin / 2) {
      return `in magazine ${this.bullets} bullets`;
    } else {
      return 'go recharge';
    }
  }
}
