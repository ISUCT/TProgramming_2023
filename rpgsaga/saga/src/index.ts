function rand_element(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
function d6() {
  return Math.random() * (1 - 6) + 6
}
function d4() {
  return Math.random() * (1 - 4) + 4
}
class Player_name_generator {
  private used_names: Set<string>;

  constructor() {
    this.used_names = new Set<string>();
  }

  generateUniqueName(): string {
    let name: string;
    do {
      name = this.generate_random_name();
    } while (this.used_names.has(name));
    this.used_names.add(name);
    return name;
  }

  private generate_random_name(): string {
    let name_list1 = ["Theo", "Neo", "Proto", "Sonato", "Ahillo", "Elde", "Akwe", "Slavo", "Ateo"]
    let name_list2 = ["win", "dor", "gen", "slav", "strator", "richt", "lord", "lon", "bor"]
    return rand_element(name_list1) + rand_element(name_list2)
  }
}

abstract class Player {
  abstract advance: boolean;
  abstract name: string;
  abstract health: number;
  abstract strength: number;
  abstract player_class: string;
  abstract enchantment_condition: boolean;
  abstract combustion_condition: number;
}

class Fighter extends Player {
  constructor(public advance: boolean = true, public name: string, public health: number = 12, public strength: number = 4, public player_class: string = "Воин", public enchantment_condition: boolean = false, public combustion_condition: number = 0) {
      super(); 
  }
  vengeance_strike() {
    let damage = Math.round(this.strength * 1.3);
    return damage;
  }
  second_wind() {
    this.health += Math.round(this.health*0.3);
  }
  strike() {
    const damage = this.strength;
    return damage;
  }
  move() {
    this.health -= this.combustion_condition;
    if (this.enchantment_condition == true) {
      this.enchantment_condition = false;
      return `Игрок ${this.name} пропустил ход`;
    }
    const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
      (property) => typeof this[property] === 'function' && property !== 'move'
    );
    if (availableMethods.length > 0) {
      const randomMethod = rand_element(availableMethods);
      return this[randomMethod]();
    } else {
      throw new Error(`По какой-то причине у бойца ${this.name, this.player_class} нет никаких доступных ходов`);
    }
  }
}

class Warlock extends Player {
  constructor(public advance: boolean = true, public name: string, public health: number = 8, public strength: number = 2, public player_class: string = "Чародей", public enchantment_condition: boolean = false, public combustion_condition: number = 0) {
    super();
}
  enchantment() {
    return ""; //Он изменяет состояние противника на this.enchantment_condition == true
  }
  strike() {
    const damage = this.strength + d6();
    return damage;
  }

  move() {
    this.health -= this.combustion_condition;
    if (this.enchantment_condition == true) {
      this.enchantment_condition = false;
      return `Игрок ${this.name} пропустил ход`;
    }
    const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
      (property) => typeof this[property] === 'function' && property !== 'move'
    );
    if (availableMethods.length > 0) {
      const randomMethod = rand_element(availableMethods);
      return this[randomMethod]();
    } else {
      throw new Error(`По какой-то причине у бойца ${this.name, this.player_class} нет никаких доступных ходов`);
    }
  }
}
class Ranger extends Player {
  constructor(public advance: boolean = true, public name: string, public health: number = 10, public strength: number = 2, public player_class: string = "Следопыт", public enchantment_condition: boolean = false, public combustion_condition: number = 0, private fire_arrows_quantity: number = 1) {
    super();
}
  fire_arrows() {
    this.fire_arrows_quantity--;
    return ""; //Изменяет состояние противника this.combustion_condition = 2
  }
  strike() {
    this.health -= this.combustion_condition;
    const damage = this.strength + d4();
    return damage;
  }
  move() {
    this.health -= this.combustion_condition;
    if (this.enchantment_condition == true) {
      this.enchantment_condition = false;
      return `Игрок ${this.name} пропустил ход из-за действия заклинания "Обворожение"`;
    }
    if (this.fire_arrows_quantity > 0) {
      const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
        (property) => typeof this[property] === 'function' && property !== 'move'
      );
      if (availableMethods.length > 0) {
        const randomMethod = rand_element(availableMethods);
        return this[randomMethod]();
      } else {
        throw new Error(`По какой-то причине у бойца ${this.name, this.player_class} нет никаких доступных ходов`);
      }
    }
    else {
      const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
        (property) => typeof this[property] === 'function' && property !== 'move' && property !== 'fire_arrows'
      );
      if (availableMethods.length > 0) {
        const randomMethod = rand_element(availableMethods);
        return this[randomMethod]();
      } else {
        throw new Error(`По какой-то причине у бойца ${this.name, this.player_class} нет никаких доступных ходов`);
      }
    }

  }
}
class Logger {
  start_message(numof_players: number, log_game_players: (Fighter | Warlock | Ranger)[]) {
    console.log("Добро пожаловать в игру RPG SAGA!");
    console.log(`Всего в игре ${numof_players} чемпионов. Но победу одержит только один из них.`)
    console.log("Сегодня в смертельной битве сойдутся:");
    for (let i = 0; i < log_game_players.length; i++) {
      console.log(`${i}, ${log_game_players[i].player_class} по имени ${log_game_players[i].name}.`)
    }
    console.log("Жребий случайным образом распределит бойцов для первого рауда.")
  }
  end_message(log_winner: Fighter | Warlock | Ranger) {
    console.log("Все битвы подошли к концу.")
    console.log("Как и было сказано, в этой войне рандома есть лишь один победитель.")
    console.log(`На радость сторонникам и назло противникам, это ${log_winner.player_class.toLowerCase()} по имени ${log_winner.name}.`)
    console.log(`Отныне тысячи саг будут посвящены ${log_winner.name}. На том и порешили.`)
    console.log(`Игра окончена.`)
  }
}
class Game {
  public round: number;
  public number_of_players: number;
  public players: (Fighter | Warlock | Ranger)[];
  constructor(public game_round: number = 0, public game_number_of_players: number, public game_players?: (Fighter | Warlock | Ranger)[]) {
    if (game_number_of_players % 2 === 0) {
      this.number_of_players = game_number_of_players;
    } else {
      throw new Error(`Количество игроков не может быть нечётным`);
    }
    if (game_players.length != 0 && game_players.length == game_number_of_players) {
      this.players = game_players;
    } else if (game_players.length != 0 && game_players.length != game_number_of_players) {
      throw new Error(`Количество игроков во вручную поданном массиве должно соответствовать количеству прописанных в игре игроков`);
    } else {
      const name_generator = new Player_name_generator();
      const init_number_of_players = this.number_of_players;
      game_players = [];
      for (let i = 0; i < init_number_of_players; i++) {
        const random_class = Math.floor(Math.random() * 3);
        let player: Fighter | Warlock | Ranger;
        switch (random_class) {
          case 0:
            player = new Fighter(true, name_generator.generateUniqueName(), 12, 4, "Воин", false, 0);
            break;
          case 1:
            player = new Warlock(true, name_generator.generateUniqueName(), 8, 2, "Чародей", false, 0);
            break;
          case 2:
            player = new Ranger(true, name_generator.generateUniqueName(), 10, 2, "Следопыт", false, 0, 1);
            break;
          default:
          throw new Error("Непредвиденный случай");
        }
        game_players.push(player);
      }
      this.players = game_players;
    }
  }
  start() {
    if (this.round == 0) {
      let startlogger = new Logger()
      startlogger.start_message(this.number_of_players, this.players)
    } else {
    this.gamecycle()
    }
  } 
  gamecycle() { //Игровой процесс после первого раунда

  }
  end(winner: Fighter | Warlock | Ranger) {
    let endlogger = new Logger()
    endlogger.end_message(winner)
    console.log("Программа завершила свою работу.")
  }
}