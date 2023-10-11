import { service } from "./service";

export class Dish extends service {

    public name: string;
    public price: number;
    private ingredients: string[] = [];
  
    constructor(name: string, price: number, public mass?:number){
      super(name, price)
      this.mass = mass
    }
  
    getInfo(): string{
      return (`${this.name}: Price: ${this.price}$, Mass: ${this.mass}g, Ingredients: ${this.ingredients}. `)
    }
    
    addIngredient(newIngredient: string){
      this.ingredients.push(newIngredient)
    }

    addIngredients(newIngredients: string[]){
        for (let i of newIngredients){
            this.ingredients.push(i)
        }
      }
  
    deleteIngredient(ingredient: string | number){
      if (typeof ingredient == "string"){
        if (ingredient == "all")
          this.ingredients = []
        else {
          for (let i in this.ingredients){
            if (this.ingredients[i] == ingredient){
              this.ingredients.splice(Number(i), 1)
              break
            }
          }
        }
      }
      if (typeof ingredient == "number")
        this.ingredients.splice(ingredient,1)
    }
  
    pay(money: number): number{
        if (super.pay(money) != money - this.price){
            console.log(`${this.name} was paid`);
            return money
        }
    }
}
  