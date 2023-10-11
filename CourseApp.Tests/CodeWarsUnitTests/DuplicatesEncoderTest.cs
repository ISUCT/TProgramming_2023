namespace CodeWarsTests.UnitTest;

using CodWearsTests;

public class DuplicatesEncoderTest
{
    [Fact]
    public void Test1()
    {
        // Act
        var res = DuplicatesEncoder.DuplicateEncode("din");

        Assert.Equal("(((", res);
    }

    [Fact]
    public void Test2()
    {
        // Act
        var res = DuplicatesEncoder.DuplicateEncode("recede");

        Assert.Equal("()()()", res);
    }

    [Fact]
    public void Test3()
    {
        // Act
        var res = DuplicatesEncoder.DuplicateEncode("Success");

        Assert.Equal(")())())", res);
    }

    [Fact]
    public void Test4()
    {
        // Act
        var res = DuplicatesEncoder.DuplicateEncode("(( @");

        Assert.Equal("))((", res);
    }
}