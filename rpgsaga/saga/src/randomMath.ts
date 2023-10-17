// Function to generate a random value from [min; max]
export function randomIntFromInterval(min: number, max: number): number
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}