namespace SagaRPG
{
    public abstract class Player
    {
        private string name;
        private string surname;
        private int maxHP;
        private int currentHP;
        private int maxDamage;
        private int minDamage;
        private int maxMana;
        private int currentMana;

        public Player(string name, string surname, int maxHP, int maxDamage, int minDamage, int maxMana)
        {
            this.name = name;
            this.surname = surname;
            this.maxHP = maxHP;
            currentHP = this.maxHP;
            this.maxDamage = maxDamage;
            this.minDamage = minDamage;
            this.maxMana = maxMana;
            currentMana = this.maxMana;
        }

        public bool isAlive() => currentHP > 0;

        public bool HasMana() => currentMana > 0;

        public string GetFullName() => name + " " + surname;

        public int GetDamage() => (new Random()).Next() % (maxDamage - minDamage) + minDamage;

        public void TakeDamage(int damage)
        {
            currentHP -= damage;
        }

        public void ResetToZero()
        {
            currentHP = maxHP;
            currentMana = maxMana;
        }

        public abstract string WhichClass();

        public abstract void UseSpecialAbility(Player enemy);
    }
}