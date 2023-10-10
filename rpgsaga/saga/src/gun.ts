export class Gun {
  readonly serialNumber: string = 's52001';
  model: string;
  caliber: number;
  magazine: number;
  cartridges: number;

  constructor(modelName: string, gunCalider: number) {
    this.model = modelName;
    this.caliber = gunCalider;
  }

  shot(): void {
    console.log('You fired');
  }
  fullMagazine() {
    return this.cartridges === this.magazine ? 'magazine full' : 'go reload';
  }
  recharge(): void {
    console.log('The magazine is being recharged');
  }
}
