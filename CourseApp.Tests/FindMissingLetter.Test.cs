using CodWearsTests;

namespace CodeWarsTests.UnitTest;

public class FindMissingLetter_Test
{
    [Fact]
    public void Test1()
    {
        Assert.Equal('e', MissingLetter.FindMissingLetter(new[] { 'a', 'b', 'c', 'd', 'f' }));
    }

    [Fact]
    public void Test2()
    {
        Assert.Equal('P', MissingLetter.FindMissingLetter(new[] { 'O', 'Q', 'R', 'S' }));
    }
}