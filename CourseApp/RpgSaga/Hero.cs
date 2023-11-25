namespace CourseApp.RpgSaga;

using System;
using System.Threading;

public abstract class Hero
{
    private string[] names = new string[]
    {
        "Stan",
        "Artur",
        "Igor",
        "Gerald",
        "Samuel",
    };

    private Random _rand = new Random();

    private string _name;

    private int _health;

    private int _damage;

    private bool _spellUsed;

    private string _type;

    public string Type
    {
        get => _type;

        set => _type = value;
    }

    public bool SpellUsed
    {
        get => _spellUsed;

        set => _spellUsed = value;
    }

    public string Name
    {
        get => _name;

        set => _name = value;
    }

    public int Damage
    {
        get => _damage;

        set => _damage = value;
    }

    public int Health
    {
        get => _health;

        set => _health = value;
    }

#pragma warning disable SA1201
    public Hero()
#pragma warning restore SA1201
    {
        _name = names[_rand.Next(0, 4)];
        _health = _rand.Next(10, 100);
        _damage = _rand.Next(5, 30);
        _spellUsed = false;
    }

    public void Fight(Hero person1, Hero person2)
    {
        if ((person1._health > 0) || (person2._health > 0))
        {
            person2 = person1.Attack(person2);
            Thread.Sleep(1000);
            person1 = person2.Attack(person1);
            Thread.Sleep(1000);
        }

        Thread.Sleep(3000);
    }

    protected abstract Hero Attack(Hero enemy);
}