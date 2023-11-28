import { Animal } from "./polymorphism/animal";
import { Mode } from "./polymorphism/animal";
import { Fox } from "./polymorphism/fox";
import { chinchilla } from "./polymorphism/chinchilla";
let animalArray:Animal[] = []
const Karina = new Fox(200, "Белая");
const Evgenia = new chinchilla(19, "Чёрная")
animalArray.push(Karina,Evgenia);
for (const item of animalArray) {
    console.log(item.sound());
}
