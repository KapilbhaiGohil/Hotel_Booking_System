using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using System.Web.Script.Serialization;
using System.Web.Services.Description;
using Hotel_Booking_System.Pages;
using Message = Hotel_Booking_System.Pages.Message;

namespace Hotel_Booking_System
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["msg"] != null)
            {
                ClientScript.RegisterStartupScript(this.GetType(),"msg", "showMsg(" + new JavaScriptSerializer().Serialize(Session["msg"])+")", true);
                Session["msg"] = null;
                Response.Write("insdie the executions");
            }

            List<Room> rooms = new RoomDAO().GetRooms();
            JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
            string obj = javaScriptSerializer.Serialize(rooms);
            Session["RefactorRooms"] = obj;
            Session["checkin"] = null;
            Session["checkout"] = null;
            Session["jsrooms"] = null;
            Session["reservationInfo"] = null;
            Session["bookingId"] = null;
        }
    }
}