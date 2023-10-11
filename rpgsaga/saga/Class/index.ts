import { Dish } from "./dish";


let pizza = new Dish("Margarita", 5, 500);
pizza.addIngredients(["dough", "sauce", "cheese", "tomato"])
console.log(pizza.getInfo());
pizza.addIngredient("chili");
pizza.addIngredient("tomato");
console.log(pizza.getInfo());
pizza.deleteIngredient("tomato");
console.log(pizza.getInfo());
pizza.deleteIngredient(3);
console.log(pizza.getInfo());