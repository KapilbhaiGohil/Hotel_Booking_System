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
    }
    public class RoomData
    {
        public string heading;
        public string price;
        public string adults;
        public string children;
    }
    public partial class BookingForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
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