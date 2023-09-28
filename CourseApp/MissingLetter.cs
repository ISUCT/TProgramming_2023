namespace CodWearsTests;

public class MissingLetter
{
    public static char FindMissingLetter(char[] chars)
    {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        chars.ToString();

        if (char.IsUpper(chars[0]))
        {
            alphabet = alphabet.ToUpper();
        }

        var index = alphabet.IndexOf(chars[0]);

        for (int i = 0; chars[i] == alphabet[index]; i++)
        {
            index++;
        }

        return alphabet[index];
    }
}