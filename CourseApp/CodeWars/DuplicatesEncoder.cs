namespace CodWearsTests;

using System.Linq;
using System.Collections.Generic;

public class DuplicatesEncoder
{
    public static string DuplicateEncode(string word)
    {
        var mass = new List<string>();
        word = word.ToLower();
        foreach (var sym in word)
        {
            mass.Add(word.Count(x => x == sym) != 1 ? ")" : "(");
        }

        return string.Join(string.Empty, mass);
    }
}