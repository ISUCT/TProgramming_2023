namespace CourseApp.DogClass;

using System;
using System.Collections.Generic;
public class Dog
{
    private uint _age;

    private string _name;

    private List<Dog> _flock;

    public string Name
    {
        get => _name;

        set => _name = value;
    }

    public uint Age
    {
        get => _age;

        set => _age = value;
    }

    public List<Dog> Flock
    {
        get => _flock;

        set => _flock = value;
    }

    public void PrintInfo()
    {
        Console.WriteLine($"Dog name is {this._name}, {this._name}'s age is {this._age}.");
        Console.WriteLine("Flock contains:");
        foreach (var friend in this._flock)
        {
            Console.WriteLine($"{friend._name} {friend._age}");
        }
    }
}