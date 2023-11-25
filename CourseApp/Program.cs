namespace CourseApp;

using System;
using System.Collections.Generic;
using RpgSaga;

public class Program
    {
        public static void Main(string[] args)
        {
            var rnd = new Random();

            Hero visor = new Magican();
            for (int i = 0; i < 1000; i++)
            {
                var list = new List<Hero>()
                {
                    new Archer(),
                    new Magican(),
                    new Warrior(),
                };
                var hero1 = list[rnd.Next(0, 3)];
                var hero2 = list[rnd.Next(0, 3)];
                if (hero1 != hero2)
                {
                    visor.Fight(hero1, hero2);
                    Console.WriteLine("Fight finish \n\n");
                }
            }
        }
    }
