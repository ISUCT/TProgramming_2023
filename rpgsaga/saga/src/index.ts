function randElement(arr) {
  if (arr.length === 0) {
    throw new Error('Массив, поданный в randElement имеет длину 0');
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function d6(): number {
  return Math.floor(Math.random() * 6) + 1;
}
function d4(): number {
  return Math.floor(Math.random() * 4) + 1;
}
function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export class PlayerNameGenerator {
  private usedNames: Set<string>;

  constructor() {
    this.usedNames = new Set<string>();
  }

  generateUniqueName(): string {
    let name: string;
    do {
      name = this.generateRandomName();
    } while (this.usedNames.has(name));
    this.usedNames.add(name);
    return name;
  }

  private generateRandomName(): string {
    const nameList1 = ['Theo', 'Neo', 'Proto', 'Sonato', 'Ahillo', 'Elde', 'Akwe', 'Slavo', 'Ateo'];
    const nameList2 = ['win', 'dor', 'gen', 'slav', 'strator', 'richt', 'lord', 'lon', 'bor'];
    return randElement(nameList1) + randElement(nameList2);
  }
}

export abstract class Player {
  abstract name: string;
  abstract health: number;
  abstract strength: number;
  abstract playerClass: string;
  abstract enchantmentCondition: boolean;
  abstract combustionCondition: number;
}

export class Fighter extends Player {
  constructor(
    public name: string,
    public health: number = 12,
    public strength: number = 4,
    public playerClass: string = 'Воин',
    public enchantmentCondition: boolean = false,
    public combustionCondition: number = 0,
  ) {
    super();
  }
  vengeanceStrike(player: Player) {
    const damage = Math.round(this.strength * 1.3);
    player.health -= damage;
    const logger = new Logger();
    logger.message(
      `${this.name}, ${this.playerClass} Ударом Возмездия нанёс ${player.name}, ${player.playerClass} ${damage} урона`,
    );
  }
  secondWind(_player?: Player) {
    this.health += Math.round(this.health * 0.3);
    const logger = new Logger();
    logger.message(`${this.name}, ${this.playerClass} восстановил здоровье до значения ${this.health}`);
  }
  strike(player: Player) {
    const damage = this.strength;
    player.health -= damage;
    const logger = new Logger();
    logger.message(
      `${this.name}, ${this.playerClass} атакой нанёс ${player.name}, ${player.playerClass} ${damage} урона`,
    );
  }
  move(player: Player) {
    const logger = new Logger();
    this.health -= this.combustionCondition;
    if (this.health > 0) {
      if (this.enchantmentCondition === true) {
        this.enchantmentCondition = false;
        logger.message(`${this.name}, ${this.playerClass} пропустил ход из-за обворожения`);
      } else {
        const availableMethods = Object.getOwnPropertyNames(Fighter.prototype).filter(
          property => typeof this[property] === 'function' && property !== 'move' && property !== 'constructor',
        );
        if (availableMethods.length > 0) {
          const randomMethod = randElement(availableMethods);
          this[randomMethod](player);
          logger.message(`${this.name}, ${this.playerClass} закончил свой ход`);
        } else {
          throw new Error(`По какой-то причине у бойца ${this.name}, ${this.playerClass} нет никаких доступных ходов`);
        }
      }
    } else {
      logger.message(`${this.name}, ${this.playerClass} при смерти...`);
    }
  }
}

export class Warlock extends Player {
  constructor(
    public name: string,
    public health: number = 8,
    public strength: number = 2,
    public playerClass: string = 'Чародей',
    public enchantmentCondition: boolean = false,
    public combustionCondition: number = 0,
  ) {
    super();
  }
  enchantment(player: Player) {
    player.enchantmentCondition = true;
    const logger = new Logger();
    logger.message(`${this.name}, ${this.playerClass} обворожил ${player.name}`);
  }
  strike(player: Player) {
    const damage = this.strength + d6();
    player.health -= damage;
    const logger = new Logger();
    logger.message(
      `${this.name}, ${this.playerClass} атакой нанёс ${player.name}, ${player.playerClass} ${damage} урона`,
    );
  }

  move(player: Player) {
    this.health -= this.combustionCondition;
    const logger = new Logger();
    if (this.health > 0) {
      if (this.enchantmentCondition === true) {
        this.enchantmentCondition = false;
        logger.message(`${this.name}, ${this.playerClass} пропустил ход из-за обворожения`);
      } else {
        const availableMethods = Object.getOwnPropertyNames(Warlock.prototype).filter(
          property => typeof this[property] === 'function' && property !== 'move' && property !== 'constructor',
        );
        if (availableMethods.length > 0) {
          const randomMethod = randElement(availableMethods);
          this[randomMethod](player);
          logger.message(`${this.name}, ${this.playerClass} закончил свой ход`);
        } else {
          throw new Error(`По какой-то причине у бойца ${this.name}, ${this.playerClass} нет никаких доступных ходов`);
        }
      }
    } else {
      logger.message(`${this.name}, ${this.playerClass} при смерти...`);
    }
  }
}
export class Ranger extends Player {
  constructor(
    public name: string,
    public health: number = 10,
    public strength: number = 2,
    public playerClass: string = 'Следопыт',
    public enchantmentCondition: boolean = false,
    public combustionCondition: number = 0,
    public fireArrowsQuantity: number = 1,
  ) {
    super();
  }
  fireArrows(player: Player) {
    this.fireArrowsQuantity -= 1;
    player.combustionCondition = 2;
    const logger = new Logger();
    logger.message(
      `${this.name}, ${this.playerClass} поджёг противника, теперь ${player.name}, ${player.playerClass} получает ${player.combustionCondition}, урона в ход `,
    );
  }
  strike(player: Player) {
    const damage = this.strength + d4();
    player.health -= damage;
    const logger = new Logger();
    logger.message(
      `${this.name}, ${this.playerClass} атакой нанёс ${player.name}, ${player.playerClass} ${damage} урона`,
    );
  }
  move(player: Player) {
    const logger = new Logger();
    this.health -= this.combustionCondition;
    if (this.health > 0) {
      if (this.enchantmentCondition === true) {
        this.enchantmentCondition = false;
        logger.message(`${this.name}, ${this.playerClass} пропустил ход из-за обворожения`);
      } else {
        if (this.fireArrowsQuantity > 0) {
          const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
            property => typeof this[property] === 'function' && property !== 'move' && property !== 'constructor',
          );
          if (availableMethods.length > 0) {
            const randomMethod = randElement(availableMethods);
            this[randomMethod](player);
            logger.message(`${this.name}, ${this.playerClass} закончил свой ход`);
          } else {
            throw new Error(
              `По какой-то причине у бойца ${this.name}, ${this.playerClass} нет никаких доступных ходов`,
            );
          }
        } else {
          const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
            property =>
              typeof this[property] === 'function' &&
              property !== 'move' &&
              property !== 'fireArrows' &&
              property !== 'constructor',
          );
          if (availableMethods.length > 0) {
            const randomMethod = randElement(availableMethods);
            return this[randomMethod](player);
          } else {
            throw new Error(
              `По какой-то причине у бойца ${this.name}, ${this.playerClass} нет никаких доступных ходов`,
            );
          }
        }
      }
    } else {
      logger.message(`${this.name}, ${this.playerClass} при смерти...`);
    }
  }
}
export class Logger {
  startMessage(logGamePlayers: (Fighter | Warlock | Ranger)[]) {
    console.log('Добро пожаловать в игру RPG SAGA!');
    console.log(`Всего в игре ${logGamePlayers.length} чемпионов. Но победу одержит только один из них.`);
    console.log('Сегодня в смертельной битве сойдутся:');
    for (let i = 0; i < logGamePlayers.length; i++) {
      console.log(`${i}, ${logGamePlayers[i].playerClass} по имени ${logGamePlayers[i].name}.`);
    }
    console.log('Жребий случайным образом распределит бойцов для первого раунда.');
  }
  message(inpmessage: string) {
    console.log(inpmessage);
  }
  endMessage(logWinner: Player) {
    console.log('Все битвы подошли к концу.');
    console.log('Как и было сказано, в этой войне рандома есть лишь один победитель.');
    console.log(`И это ${logWinner.playerClass.toLowerCase()} по имени ${logWinner.name}.`);
    console.log(`Отныне тысячи саг будут посвящены ${logWinner.name}. На том и порешили.`);
    console.log(`Игра окончена.`);
  }
}
export class Game {
  public round: number;
  public numberOfPlayers: number;
  public players: (Fighter | Warlock | Ranger)[];
  constructor(
    public gameRound: number = 0,
    public gameNumberOfPlayers: number,
    public gamePlayers?: (Fighter | Warlock | Ranger)[],
  ) {
    if (gameNumberOfPlayers % 2 === 0) {
      this.numberOfPlayers = gameNumberOfPlayers;
    } else {
      throw new Error(`Количество игроков не может быть нечётным`);
    }
    if (gamePlayers !== undefined) {
      if (gamePlayers.length !== 0 && gamePlayers.length === gameNumberOfPlayers) {
        this.players = gamePlayers;
      } else {
        throw new Error(
          `Количество игроков во вручную поданном массиве должно соответствовать количеству прописанных в игре игроков`,
        );
      }
    } else {
      const nameGenerator = new PlayerNameGenerator();
      const initNumberOfPlayers = this.numberOfPlayers;
      const gamePlayers2 = [];
      for (let i = 0; i < initNumberOfPlayers; i++) {
        const randomClass = Math.floor(Math.random() * 3);
        let player: Fighter | Warlock | Ranger;
        switch (randomClass) {
          case 0:
            player = new Fighter(nameGenerator.generateUniqueName(), 12, 4, 'Воин', false, 0);
            break;
          case 1:
            player = new Warlock(nameGenerator.generateUniqueName(), 8, 2, 'Чародей', false, 0);
            break;
          case 2:
            player = new Ranger(nameGenerator.generateUniqueName(), 10, 2, 'Следопыт', false, 0, 1);
            break;
          default:
            throw new Error('Непредвиденный случай');
        }
        gamePlayers2.push(player);
      }
      this.players = gamePlayers2;
    }
    this.round = 0;
  }
  start() {
    const startLogger = new Logger();
    startLogger.startMessage(this.players);
    this.gameCycle();
  }
  gameCycle() {
    const logger = new Logger();
    let battles = 0;
    const shuffled = shuffle<Fighter | Warlock | Ranger>(this.players);
    while (shuffled.length !== 1) {
      let w1 = 0;
      let w2 = 1;
      while (w2 < shuffled.length) {
        let moves = 0;
        for (let upd = 0; upd < shuffled.length; upd++) {
          if (shuffled[upd] instanceof Ranger) {
            const rangerupd = shuffled[upd] as Ranger;
            rangerupd.enchantmentCondition = false;
            rangerupd.combustionCondition = 0;
            rangerupd.fireArrowsQuantity = 1;
            shuffled[upd] = rangerupd;
          } else {
            shuffled[upd].enchantmentCondition = false;
            shuffled[upd].combustionCondition = 0;
          }
        }
        logger.message(`~~~Раунд ${this.round} бой ${battles}. ${shuffled[w1].name} против ${shuffled[w2].name}~~~`);
        while (shuffled[w1].health > 0 && shuffled[w2].health > 0) {
          logger.message(`${moves} ход игрока ${shuffled[w1].name}, ${shuffled[w1].playerClass}`);
          shuffled[w1].move(shuffled[w2]);
          logger.message(`${moves} ход игрока ${shuffled[w2].name}, ${shuffled[w2].playerClass}`);
          shuffled[w2].move(shuffled[w1]);
          moves += 1;
        }
        if (shuffled[w1].health <= 0) {
          logger.message(
            `${shuffled[w1].name}, ${shuffled[w1].playerClass} погибает от рук ${shuffled[w2].name}, ${shuffled[w2].playerClass}`,
          );
          shuffled.splice(w1, 1);
        } else {
          logger.message(
            `${shuffled[w2].name}, ${shuffled[w2].playerClass} погибает от рук ${shuffled[w1].name}, ${shuffled[w1].playerClass}`,
          );
          shuffled.splice(w2, 1);
        }
        w1 += 1;
        w2 += 1;
        battles += 1;
      }
      this.round += 1;
    }
    this.end(shuffled[0]);
  }
  end(winner: Fighter | Warlock | Ranger) {
    const endLogger = new Logger();
    endLogger.endMessage(winner);
  }
}
