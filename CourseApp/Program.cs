namespace CourseApp
{
    using System;

    public class Program
    {
        public static void Main(string[] args)
        {
            Weapon[] weapons = new Weapon[2];

            weapons[0] = new Gun("Макаров", 2, 10);

            weapons[1] = new MachineGun("Максим", 3, 250);

            foreach (var it in weapons)
            {
                Console.WriteLine(it.ToString());
                it.Shot();
            }
        }
    }
}
