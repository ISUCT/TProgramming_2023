using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SagaRPG
{
    public class Knight : Player
    {
        public Knight(string name, string surname, int maxHP, int maxDamage, int minDamage, int maxMana)
            : base(name, surname, maxHP, maxDamage, minDamage, maxMana) { }

        public override void UseSpecialAbility(Player enemy)
        {
            throw new NotImplementedException();
        }

        public override string WhichClass() => "Рыцарь";
    }
}
