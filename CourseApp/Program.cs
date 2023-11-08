namespace CourseApp;

using System;
using System.Collections.Generic;
using RpgSaga;

    public class Program
    {
        public static void Main(string[] args)
        {
            var rnd = new Random();
            var list = new List<Hero>()
            {
                new Archer(),
                new Magican(),
                new Warrior(),
            };

            Hero visor = new Magican();
            while (true)
            {
                visor.Fight(list[rnd.Next(0, 2)], list[rnd.Next(0, 2)]);
            }
        }
    }
