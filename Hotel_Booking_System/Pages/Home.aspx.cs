using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using System.Web.Script.Serialization;

namespace Hotel_Booking_System
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<Room> rooms = new RoomDAO().GetRooms();
            JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
            string obj = javaScriptSerializer.Serialize(rooms);
            Session["RefactorRooms"] = obj;
            Response.Write("");
            Session["checkin"] = null;
            Session["checkout"] = null;
            Session["jsrooms"] = null;
        }
    }
}