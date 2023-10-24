namespace CourseApp;

using System.Collections.Generic;

using DefaultNamespace;

    public class Program
    {
        public static void Main(string[] args)
        {
            var dog = new Dog();
            dog.Name = "Sam";
            dog.Age = 15;
            dog.Flock = new List<Dog>
            {
                new Dog() { Name = "Steve", Age = 4 },
            };

            dog.PrintInfo();
        }
    }
