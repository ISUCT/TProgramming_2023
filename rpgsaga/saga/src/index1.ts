import { Helper } from "./helper";
import { Logger } from "./logger";

class Game{
  
    fight() {
        for (var i = 0; i < 10; i++){
            
            let unit1 = Helper.generateCharacter();
            let unit2 = Helper.generateCharacter();
            
            Logger.startMessage();
            Logger.fighting(unit1, unit2);

        }    
    }
} 

const game = new Game();
    game.fight();