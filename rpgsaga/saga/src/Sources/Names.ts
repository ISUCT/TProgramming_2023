export let Names = ["Gojo","Satoru", "Miku", "Hatsune", "Maidochka", "Sans", "Serega", "Kolya", "Gin-Gin", "Roflik"];
export function deleteName(name: string){
    for (let i=0; i<Names.length; i++){
        if (Names[i] === name) {
            Names.splice(i, 1);
        }
    }
}