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
            Console.WriteLine($"{this.Type} {this.Name} use spell and attack {enemy.Type}, damage = {this.Damage}, {enemy.Type} {enemy.Name} health =  {enemy.Health - UseSpell()}");
            enemy.Health -= UseSpell();
            SpellUsed = true;
        }
        else
        {
            enemy.Health -= this.Damage;
            Console.WriteLine($"{this.Type} {this.Name} attack {enemy.Type}, damage = {this.Damage}, {enemy.Type} {enemy.Name} health =  {enemy.Health - Damage}");
        }

        return enemy;
    }
}