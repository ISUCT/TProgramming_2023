export function randomNumber(minValue: number, maxValue: number){
    return (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
}
export function randomBool(){
    return Math.random()>0.5 ? 1 : 0;
}