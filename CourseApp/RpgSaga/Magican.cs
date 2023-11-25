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
            Console.WriteLine($"{this.Type} {this.Name} use spell and attack {enemy.Type} {enemy.Name}, damage = {this.Damage}, {enemy.Type} {enemy.Name}  health = {enemy.Health - Damage}.");
            Console.WriteLine($"{enemy.Type} {enemy.Name} attack {Type}, but damage = 0");
            Console.WriteLine($"{this.Type} {this.Name} attack {enemy.Type} {enemy.Name}, damage = {this.Damage}, {enemy.Type} {enemy.Name} health = {enemy.Health - Damage}");
            enemy.Health -= Convert.ToByte(Damage * 2);
            SpellUsed = true;
        }
        else
        {
            enemy.Health -= this.Damage;
            Console.WriteLine($"{this.Type} {this.Name} attack {enemy.Type} {enemy.Name}, damage = {this.Damage}, {enemy.Type} {enemy.Name} health = {enemy.Health - Damage}");
        }

        return enemy;
    }
}