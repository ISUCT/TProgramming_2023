namespace CodWearsTests;

public class StrToCamelCase
{
    public static string ToCamelCase(string str)
    {
        var res = string.Empty;

        str.ToCharArray();
        for (int i = 0; i < str.Length; i++)
        {
            if (str[i] != '_' && str[i] != '-')
            {
                res += str[i].ToString();
            }
            else
            {
                res += str[i + 1].ToString().ToUpper();
                i += 1;
            }
        }

        return res;
    }
}