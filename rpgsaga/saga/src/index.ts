function randElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

function name_generator() : string {
    let name_list1 = ["Theo", "Neo", "Proto", "Sonato", "Ahillo", "Elde", "Akwe"]
    let name_list2 = ["win", "dor", "gen", "slav", "strator", "richt", "lord"]
    return randElement(name_list1) + randElement(name_list2)
}

abstract class Player {
  abstract name: string;
  abstract health: number;
  abstract strength: number;
}
class Fighter extends Player {
  constructor(public name: string, public health: number, public strength: number) {
      super(); 
  }
  static moves: string[] = Object.getOwnPropertyNames(this).filter((property) => typeof this[property] === 'function');
  vengeance_strike() {
    let damage = this.strength * 1.3;
    return damage
  }
  second_wind() {
    this.health += Math.round(this.health*0.3);
  }
  strike() {
    const damage = this.strength
    return damage
  }
  move() {

  }
}
console.log(Fighter.moves)
class Warlock extends Player {
  constructor(public name: string, public health: number, public strength: number, public enchantment_flag: boolean = false) {
    super();
}
  enchantment() {
    this.enchantment_flag = true;
  }
}