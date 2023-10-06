using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Models
{
    public class Room
    {
        public int ID { get; set; }
        public string Type { get; set; }
        public string Desc { get; set; }
        public string Area { get; set; }
        public int Capasity { get; set; }
        public int Price { get; set; }
        public string Bedtype { get; set; }
        

        public Room(int iD, string type, string desc, string area, int capasity, int price, string bedtype)
        {
            ID = iD;
            Type = type;
            Desc = desc;
            Area = area;
            Capasity = capasity;
            Price = price;
            Bedtype = bedtype;
        }
    }
    public class eachroom
    {
        public int ID { get; set; }
        public int RoomTypeId { get; set; }
    }
}