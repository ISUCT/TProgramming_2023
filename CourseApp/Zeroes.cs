namespace CodWearsTests;

public class Zeroes
{
    public static int[] MoveZeroes(int[] array) => array.OrderBy(x => x == 0).ToArray();
}