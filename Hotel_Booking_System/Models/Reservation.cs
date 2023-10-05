using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Checkin { get; set; }
        public DateTime Checkout { get; set; }
        public int Amount { get; set; }
        public List<Room> Rooms { get; set; }
        public Customer Customer {get;set;}
        public Reservation(int id, DateTime checkin, DateTime checkout, int amount, List<Room> rooms, Customer customer)
        {
            Id = id;
            Checkin = checkin;
            Checkout = checkout;
            Amount = amount;
            Rooms = rooms;
            Customer = customer;
        }
    }
}