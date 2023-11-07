namespace CourseApp
{
    using System;

    public abstract class Weapon
    {
        private float caliber;
        private int shop;
        private int cartridges;

        public Weapon()
        {
            Model = "None";
            caliber = 1;
            shop = 1;
            cartridges = shop;
        }

        public Weapon(string model, float caliber, int shop)
        {
            Model = model;
            Caliber = caliber;
            Shop = shop;
            cartridges = shop;
        }

        public string Model { get; set; }

        public float Caliber
        {
            get
            {
                return caliber;
            }

            set
            {
                if (value > 0)
                {
                    caliber = value;
                }
                else
                {
                    throw new Exception("Некоректное значение калибра пистолета");
                }
            }
        }

        public int Shop
        {
            get
            {
                return shop;
            }

            set
            {
                if (value > 0)
                {
                    shop = value;
                }
                else
                {
                    throw new Exception("Некоректное значение вместимости магазина пистолета");
                }
            }
        }

        public int Cartridges
        {
            get
            {
                return cartridges;
            }

            set
            {
                if (value >= 0 && value <= shop)
                {
                    cartridges = value;
                }
                else
                {
                    throw new Exception("Некоректное значение колличества патронов в пистолете");
                }
            }
        }

        public abstract void Shot();

        public void Recharge()
        {
            cartridges = shop;
            Console.WriteLine("Вщик-Вщик");
        }

        public void Discharge()
        {
            cartridges = 0;
            Console.WriteLine("Тцык-Тцык");
        }
    }
}
