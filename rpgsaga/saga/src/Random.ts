export function RandomNumber(minValue: number, maxValue: number){
    return (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
}
export function RandomBool(){
    return Math.random()>0.5 ? 1 : 0;
}