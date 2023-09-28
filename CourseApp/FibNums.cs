namespace CodWearsTests;

public class FibNums
{
    public static ulong[] ProductFib(ulong prod)
    {
        ulong a = 0;
        ulong b = 1;

        while (a * b < prod)
        {
            ulong temp = a;
            a = b;
            b = temp + b;
        }

        return new ulong[] { a, b, (ulong)(a * b == prod ? 1 : 0) };
    }
        
}