namespace CourseApp.RpgSaga;

using System;

public interface IHero
{
    public string Name;

    public int Strength;

    public int Health;

    public Random Rand = new Random();

    public int SetValue();

    public void Atack(IHero person);
}