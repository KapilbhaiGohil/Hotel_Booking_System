using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime checkin { get; set; }
        public DateTime checkout { get; set; }
        public Reservation(int id, DateTime checkin, DateTime checkout)
        {
            this.Id = id;
            this.checkin = checkin;
            this.checkout = checkout;
        }
    }
}