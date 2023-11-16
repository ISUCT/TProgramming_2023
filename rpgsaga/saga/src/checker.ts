export class Checker
{
    public static isGameOver(quantityOfPlayers: number)
    {
        return (quantityOfPlayers <= 1) ? true: false;
    }
}