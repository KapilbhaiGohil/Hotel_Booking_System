using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Models
{
    public class ReservationFull
    {
        public int Id { get; set; }
        public DateTime checkin { get; set; }
        public DateTime checkout { get; set; }
        public int amount { get;set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string specialRequest { get; set; }
        public DateTime date { get; set; }
        public ReservationFull(int id, DateTime checkin, DateTime checkout, int amount, string firstname, string lastname, string email, string phone, string specialRequest, DateTime date)
        {
            Id = id;
            this.checkin = checkin;
            this.checkout = checkout;
            this.amount = amount;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phone = phone;
            this.specialRequest = specialRequest;
            this.date = date;
        }
    }
}