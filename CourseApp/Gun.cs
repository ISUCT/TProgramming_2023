namespace CourseApp
{
    using System;

    public class Gun : Weapon
    {
        public Gun()
            : base()
        {
        }

        public Gun(string model, float caliber, int shop)
            : base()
        {
            Model = model;
            Caliber = caliber;
            Shop = shop;
            Cartridges = shop;
        }

        public override void Shot()
        {
            if (Cartridges > 0)
            {
                Console.WriteLine("Паф!");
            }
            else
            {
                Console.WriteLine("Кляц");
            }
        }

        public override string ToString()
        {
            return "Пистолет модели " + Model + " калибра " + Caliber + " мм и вместимостью магазина " + Shop + " патронов";
        }
    }
}
