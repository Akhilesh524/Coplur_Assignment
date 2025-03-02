using System;


namespace ConsoleApp1
{
    class Program
    {   
        class Student
        {
            String name;
            int rollnumber;
            String course;
            int age;

            public void printDetails(String name, int rollnumber,String course ,int age)
            {
                Console.WriteLine("Student name: " + name);
                Console.WriteLine("Student rollnumber: " + rollnumber);
                Console.WriteLine("Student course: " + course);
                Console.WriteLine("Student age: " + age);
            }
        }
        static void Main(string[] args)
        {
            Student s1 = new Student();
            Student s2 = new Student();
            Student s3 = new Student();

            s1.printDetails("john",12,"java",20);
            Console.WriteLine();
            s2.printDetails("alice", 12, "java", 20);
            Console.WriteLine();
            s3.printDetails("Bob", 12, "java", 20);

        }
    }
}
