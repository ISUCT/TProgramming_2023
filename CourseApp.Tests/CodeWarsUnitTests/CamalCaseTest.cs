﻿namespace CodeWarsTests.UnitTest;

using CodWearsTests;
using Xunit;

public class CamalCaseTest
{
    [Fact]
    public void Test1()
    {
        Assert.Equal("theStealthWarrior", StrToCamelCase.ToCamelCase("the_stealth_warrior"));
    }
}