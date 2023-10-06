using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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

            // Print the deserialized data
            Response.Write("Check-in Date: " + dt.checkin.ToString());
            Response.Write("<br/>");
            Response.Write("Check-out Date: " + dt.checkout.ToString());
            Response.Write("<br/>");
            Response.Write("Price: " + dt.price);
            Response.Write("<br/>");
            Response.Write("Total Days: " + dt.totaldays);
            Response.Write("<br/>");

            Response.Write("Rooms:");

            // Loop through the rooms and print their details
            foreach (RoomData room in dt.rooms)
            {
                Response.Write("<br/>");
                Response.Write("Heading: " + room.heading);
                Response.Write("<br/>");
                Response.Write("Price: " + room.price);
                Response.Write("<br/>");
                Response.Write("Adults: " + room.adults);
                Response.Write("<br/>");
                Response.Write("Children: " + room.children);
                Response.Write("<br/>");
            }

            // Print other data
            Response.Write("First Name: " + dt.firstname);
            Response.Write("<br/>");
            Response.Write("Last Name: " + dt.lastname);
            Response.Write("<br/>");
            Response.Write("Email: " + dt.email);
            Response.Write("<br/>");
            Response.Write("Phone: " + dt.number);
            Response.Write("<br/>");
            Response.Write("Special Request: " + dt.specialrequest);

        }
    }
}