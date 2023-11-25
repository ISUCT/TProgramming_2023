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
            Console.WriteLine($"{Type} {Name} use spell and attack {enemy.Type} {enemy.Name}, damage = {Damage + 2}, {enemy.Type} {enemy.Name} health = {enemy.Health - Damage}");
            SpellUsed = true;
            enemy.Health -= Damage;
        }
        else
        {
            enemy.Health -= Damage + 2;
            Console.WriteLine($"{this.Type} {this.Name} attack {enemy.Type} {enemy.Name}, damage = {Damage + 2}, {enemy.Type} {enemy.Name} health = {enemy.Health - Damage}");
        }

        return enemy;
    }
}