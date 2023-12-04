export enum Aff {
  Normal,
  Block,
  Resist,
  Reflect,
  Weak,
}
export enum ActionType {
  Fire,
  Ice,
  Electric,
  Normal,
  Support,
}

export class AffinityList {
  // INTENDED UpperCamelCase because of Aff enum
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Normal: Aff;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Fire: Aff;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Ice: Aff;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Electric: Aff;

  constructor(aff: Aff[]) {
    while (aff.length < 4) {
      aff.push(Aff.Normal);
    }
    this.Normal = aff[0];
    this.Fire = aff[1];
    this.Ice = aff[2];
    this.Electric = aff[3];
  }
}
