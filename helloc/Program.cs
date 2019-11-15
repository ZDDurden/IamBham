using System;

namespace helloc
{
    class Program
    {
        static void Main(string[] args)
        {
            long ThisIsAnInteger;
            string myName = "Zach";
            char firstLetter = 'C';
            int num = 2;
            num = 5;
            num = 6 + 5;
            double otherNum = 4.5;
            otherNum = 5;
            var newNum = 6;
            var newString = "test";
            int[] seriesOfNumbers = { 1, 5, 2, 10, 9, 5, 6, 8 };
            string test = 5.ToString();
            int otherNum1;
            otherNum1 = (int)otherNum;
            object x = otherNum1;
            otherNum1 = (int)x;

            if (otherNum1 > 5)
            {
                Console.WriteLine("var was greater than 5");
            }
            else if (otherNum1 < 5)
            {
                Console.WriteLine("var was less than 5");
            }
            else
            {
                Console.WriteLine("var equals 5");
            }

            Console.WriteLine($"Hello {myName}{seriesOfNumbers[0]}!");

            Console.ReadKey();
        }
    }
}
