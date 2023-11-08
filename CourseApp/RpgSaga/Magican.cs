namespace CourseApp.RpgSaga;

using System;

public class Magican : Hero
{
    public Magican()
        : base()
    {
        Type = "Magican";
    }

    protected override Hero Attack(Hero enemy)
    {
        if (!SpellUsed)
        {
            Console.WriteLine($"{Type} {Name} use spell and attack {enemy.Type}, damage = {Damage}.");
            Console.WriteLine($"{enemy.Type} {enemy.Name} attack {Type}, but damage = 0");
            Console.WriteLine($"{Type} {Name} attack {enemy.Type}, damage = {Damage}");
            enemy.Health -= Convert.ToByte(Damage * 2);
            SpellUsed = true;
        }
        else
        {
            enemy.Health -= Damage;
            Console.WriteLine($"{Type} {Name} attack {enemy.Type}, damage = {Damage}");
        }

        return enemy;
    }
}