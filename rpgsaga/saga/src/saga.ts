abstract class Player {
  abstract health: number;
  abstract readonly strength: number;
  abstract readonly name: string;

  protected currentAttack = 0;

  public attack(): number {
    return this.strength;
  }

  public ability(): boolean | null {
    // when no ability, return null
    return null;
  }
}

export class Knight extends Player {
  constructor(public health: number, public strength: number, public name: string) {
    super();
  }

  abilityAttack(): number {
    return this.strength * 0.3;
  }
}

export class Mage extends Player {
  public isEnemyFrozen = false;
  constructor(public health: number, public strength: number, public name: string) {
    super();
  }

  ability(): boolean {
    this.isEnemyFrozen = true;
    return this.isEnemyFrozen;
  }
}

export class Archer extends Player {
  public isEnemyBurns = false;
  constructor(public health: number, public strength: number, public name: string) {
    super();
  }

  ability(): boolean {
    this.isEnemyBurns = true;
    return this.isEnemyBurns;
  }
}

export class Battle {
  opponents: Array<Player>;

  constructor(player1: Player, player2: Player) {
    this.opponents = new Array<Player>(player1, player2);
  }

  initiate() {
    let currentTurn = Math.random();
    while (this.opponents[0].health > 0 || this.opponents[1].health > 0) {
      const activePlayer = this.opponents[currentTurn];
      let turnDamage = 0;
      if (Math.random() === 0) {
        turnDamage = activePlayer.attack();
      } else {
        const abilityState = activePlayer.ability();
        if (abilityState === null) {
          turnDamage = activePlayer.abilityAttack();
        } else if (activePlayer.constructor.name === 'Archer' && activePlayer.ability()) {
          turnDamage += 2;
        }
      }
      currentTurn = currentTurn === 0 ? 1 : 0;
      const waitingPlayer = this.opponents[currentTurn]; // this returns enemy since currentTurn is changed and activePlayer is still active
      if (waitingPlayer.constructor.name === 'Mage' && activePlayer.ability()) {
        turnDamage = 0;
      }
      waitingPlayer.health -= turnDamage;
    }
  }
}
