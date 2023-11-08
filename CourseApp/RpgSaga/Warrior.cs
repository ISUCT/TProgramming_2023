namespace CourseApp.RpgSaga;

using System;

public class Warrior : Hero
{
    public Warrior()
        : base()
    {
        Type = "Warrior";
    }

    public byte UseSpell() => (byte)Math.Round(Damage * 1.3);

    protected override Hero Attack(Hero enemy)
    {
        if (!SpellUsed)
        {
            enemy.Health -= UseSpell();
            Console.WriteLine($"{Type} {Name} use spell and attack {enemy.Type}, damage = {Damage}, {enemy.Type} health =  {enemy.Health - Damage}");
            SpellUsed = true;
        }
        else
        {
            enemy.Health -= Damage;
            Console.WriteLine($"{Type} {Name} attack {enemy.Type}, damage = {Damage}, {enemy.Type} health =  {enemy.Health - Damage}");
        }

        return enemy;
    }
}