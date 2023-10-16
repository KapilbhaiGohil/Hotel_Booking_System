using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Pages
{

    public class FinalStorageData
    {
        public DateTime checkin;
        public DateTime checkout;
        public long price;
        public int totaldays;
        public List<RoomData> rooms;
        public string firstname;
        public string lastname;
        public string email;
        public string number;
        public string specialrequest;
        public FinalStorageData(DateTime checkin, DateTime checkout, long price, int totaldays, List<RoomData> rooms, string firstname, string lastname, string email, string number, string specialrequest)
        {
            this.checkin = checkin;
            this.checkout = checkout;
            this.price = price;
            this.totaldays = totaldays;
            this.rooms = rooms;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.number = number;
            this.specialrequest = specialrequest;
        }
        public FinalStorageData() { }
    }
    public class RoomData
    {
        public string heading;
        public string price;
        public string adults;
        public string children;
        public RoomData(string heading, string price, string adults, string children)
        {
            this.heading = heading;
            this.price = price;
            this.adults = adults;
            this.children = children;
        }
        public RoomData() { }
    }
    public partial class BookingForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["jsrooms"] == null)
            {
                Response.Redirect("~/Pages/Home");
            }
        }

        protected void finalBookButton_Click(object sender, EventArgs e)
        {
            FinalStorageData dt = JsonConvert.DeserializeObject<FinalStorageData>(hiddenField.Value);
            int res = new ReservationDAO().BookRoom(dt);
            if(res!=0) {
                Session["reservationInfo"] = hiddenField.Value;
                Session["bookingId"] = res;
                Response.Redirect("~/Pages/BookingConfirmation"); 
            }
            else { }
        }
    }
}