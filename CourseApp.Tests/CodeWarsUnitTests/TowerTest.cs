namespace CodeWarsTests.UnitTest;

using CodWearsTests;
using Xunit;

public class TowerTest
{
    [Fact]
    public void Test1()
    {
        Assert.Equal(string.Join(",", new[] { "*" }), string.Join(",", Towerbuild.TowerBuilder(1)));
    }

    [Fact]
    public void Test2()
    {
        Assert.Equal(string.Join(",", new[] { " * ", "***" }), string.Join(",", Towerbuild.TowerBuilder(2)));
    }

    [Fact]
    public void Test3()
    {
        Assert.Equal(
            string.Join(",", new[] { "  *  ", " *** ", "*****" }),
            string.Join(",", Towerbuild.TowerBuilder(3)));
    }
}