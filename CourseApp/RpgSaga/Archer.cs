namespace CourseApp.RpgSaga;

using System;

public class Archer : Hero
{
    public Archer()
        : base()
    {
        Type = "Archer";
    }

    protected override Hero Attack(Hero enemy)
    {
        if (!SpellUsed)
        {
            Console.WriteLine($"{Type} {Name} use spell and attack {enemy.Type}, damage = {Damage + 2}");
            SpellUsed = true;
            enemy.Health -= Damage;
        }
        else
        {
            enemy.Health -= Damage + 2;
            Console.WriteLine($"{Type} {Name} attack {enemy.Type}, damage = {Damage + 2}");
        }

        return enemy;
    }
}