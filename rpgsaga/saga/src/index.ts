import { Car } from "./car";
import { Vehicle } from "./vehicle";

try{
    let car1 = new Car(2005, 45, "95", "Toyota");
    car1.speed = 100;
    console.log(car1.speed);
    console.log(car1.signal("BEEP"));
    console.log(car1.brakePathLength());
    console.log(car1.willCrash(50));
    console.log(`${car1}`)
}catch(e){
    console.log(e)
}

