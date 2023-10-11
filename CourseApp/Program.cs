namespace CourseApp;

using DefaultNamespace;

    public class Program
    {
        public static void Main(string[] args)
        {
            var dog = new Dog();
            dog.Age = 15;
            System.Console.WriteLine(dog.Age);

            System.Console.WriteLine(dog);
        }
    }
