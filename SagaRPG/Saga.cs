namespace SagaRPG
{
    enum PlayerClasses : int
    {
        Knight,
        Mage,
        Archer,
        SIZE
    }

    public class Saga
    {

        static readonly PlayerClasses[] playerClassesVal = Enum.GetValues(typeof(PlayerClasses)).Cast<PlayerClasses>().ToArray();
        static Random random = new Random();

        private int countPlayers;
        private List<Player> players;
        private List<string> names;
        private List<string> surnames;

        public Saga(int countPlayers)
        {
            this.countPlayers = countPlayers;
            LoadNamesAndSurnames();
            for (int i = 0; i < countPlayers; i++)
            {
                Player buf;
                switch(playerClassesVal[random.Next(playerClassesVal.Length)])
                {
                    case PlayerClasses.Knight: break;
                    case PlayerClasses.Mage: break;
                    case PlayerClasses.Archer: break;
                    default: break;
                }
            }
        }

        private void LoadNamesAndSurnames()
        {
            string line;
            names = new List<string>();
            surnames = new List<string>();
            try
            {
                StreamReader sr = new StreamReader("names.txt");
                line = sr.ReadLine();
                while (line != null)
                {
                    names.Add(line);
                    line = sr.ReadLine();
                }
                sr.Close();
                sr = new StreamReader("surnames.txt");
                line = sr.ReadLine();
                while (line != null)
                {
                    surnames.Add(line);
                    line = sr.ReadLine();
                }
                sr.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Executing finally block.");
            }
        }
    }
}
