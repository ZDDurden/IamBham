using System;

namespace Shape
{
    public class Circle
    {
        public double Radius { get; set; }
        private double _radiusAlt;
        public double radiusAlt
        {
            get
            {
                Console.WriteLine("user got variable");
                return _radiusAlt;
            }
            set
            {
                if (value > 1)
                {
                    _radiusAlt = value;
                }
            }
        }
    }
}
