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
console.log(name_generator())