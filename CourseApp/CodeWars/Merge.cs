namespace CodWearsTests;

using System.Collections.Generic;

public class Merge
{
    public static string[] MergeArrays(string[] arr1, string[] arr2)
    {
        var res = new List<string>();
        var length = arr1.Length > arr2.Length ? arr2.Length : arr1.Length;
        var index = 0;

        while (index < length)
        {
            res.Add(arr1[index]);
            res.Add(arr2[index]);
            index++;
        }

        if (arr1.Length > arr2.Length)
        {
            for (; index < arr1.Length; index++)
            {
                res.Add(arr1[index]);
            }
        }
        else
        {
            for (; index < arr2.Length; index++)
            {
                res.Add(arr2[index]);
            }
        }

        return res.ToArray();
    }
}