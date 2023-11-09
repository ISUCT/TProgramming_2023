import { Animal } from "./polymorphism/animal";
import { Mode } from "./polymorphism/animal";
import { Fox } from "./polymorphism/fox";
import { chinchilla } from "./polymorphism/chinchilla";
let animalArray:object[] = []
const Karina = new Fox(200, "Белая");
const Evgenia = new chinchilla(19, "Чёрная")
animalArray.push(Karina,Evgenia)
console.log(Karina.sound())
console.log(Evgenia.sound())