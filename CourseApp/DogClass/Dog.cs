namespace DefaultNamespace;

public class Dog
{
    private int _age;

    private string _name;

    public string Name
    {
        get
        {
            return _name;
        }

        set
        {
            _name = value;
        }
    }

    public int Age
    {
        get
        {
            return _age;
        }

        set
        {
            _age = value;
        }
    }
}