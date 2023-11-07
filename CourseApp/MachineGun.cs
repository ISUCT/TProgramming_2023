namespace CourseApp
{
    using System;

    public class MachineGun : Weapon
    {
        public MachineGun()
            : base()
        {
        }

        public MachineGun(string model, float caliber, int shop)
            : base(model, caliber, shop)
        {
        }

        public override void Shot()
        {
            if (Cartridges > 0)
            {
                Console.WriteLine("Тра-та-та-та-та!");
            }
            else
            {
                Console.WriteLine("Кляц-кляц");
            }
        }

        public override string ToString()
        {
            return "Пулемёт модели " + Model + " калибра " + Caliber + " мм и вместимостью магазина " + Shop + " патронов";
        }
    }
}
