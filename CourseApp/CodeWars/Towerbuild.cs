namespace CodWearsTests;

using System.Collections.Generic;

public class Towerbuild
{
    public static string[] TowerBuilder(int nFloors)
    {
        var tower = new List<string>();

        for (int i = 0; i < nFloors; i++)
        {
            var padding = new string(' ', nFloors - i - 1);
            var sharps = new string('*', (i * 2) + 1);
            tower.Add($"{padding}{sharps}{padding}");
        }

        return tower.ToArray();
    }
}