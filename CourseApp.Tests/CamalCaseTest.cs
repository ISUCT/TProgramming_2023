using CodeWarsTests;
using CodWearsTests;

namespace CodeWarsTests.UnitTest;

public class CamalCaseTest
{
    [Fact]
    public void Test1()
    {
        Assert.Equal("theStealthWarrior", StrToCamelCase.ToCamelCase("the_stealth_warrior"));
    }
}