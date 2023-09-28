using CodeWarsTests;
using CodWearsTests;

namespace CodeWarsTests.UnitTest;

public class Merge_Tests
{
    [Fact]
    public void Test1()
    {
        Assert.Equal(new string[] { "a", "1", "b", "2", "c", "3", "d", "e" }, Merge.MergeArrays(new string[] { "a", "b", "c", "d", "e" }, new string[] { "1", "2", "3" }));
    }
}