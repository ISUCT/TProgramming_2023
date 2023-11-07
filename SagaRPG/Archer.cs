namespace SagaRPG
{
    public class Archer : Player
    {
        public Archer(string name, string surname, int maxHP, int maxDamage, int minDamage, int maxMana)
            : base(name, surname, maxHP, maxDamage, minDamage, maxMana) { }

        public override void UseSpecialAbility(Player enemy)
        {
            throw new NotImplementedException();
        }

        public override string WhichClass() => "Лучник";
    }
}
