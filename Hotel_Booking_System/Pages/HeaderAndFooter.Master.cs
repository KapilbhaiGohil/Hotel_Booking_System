using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Pages
{
    public class MembersInfo
    {
        public int children { get; set; }
        public int adult { get; set; }
    }
    public class BookingData
    {
        List<MembersInfo> Rooms { get; set; }
        public DateTime from { get; set; }
        public DateTime to { get; set; }
    }
    public partial class HeaderAndFooter : System.Web.UI.MasterPage
    {
        RoomDAO rdao = new RoomDAO();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void logout_Click(object sender, EventArgs e)
        {
            Session["user"] = null;
            Session.Clear();
            Session.Abandon();
            Response.Redirect(Request.RawUrl);
        }
        protected void complexData_Click(object sender, EventArgs e)
        {
            string jsondata = hiddenInput.Value;
            //Response.Write(jsondata);
            BookingData b = JsonConvert.DeserializeObject<BookingData>(jsondata);
            //Response.Write(b.from+" "+b.to)
            List<Room>rooms = rdao.GetRooms();
            JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
            string jsrooms = javaScriptSerializer.Serialize(rooms);
            Session["jsrooms"] = jsrooms;
            Session["checkin"] = b.from.Date.ToString("yyyy-MM-dd");
            Session["checkout"] = b.to.Date.ToString("yyyy-MM-dd");
            Response.Redirect("~/Pages/BookRoomList");
        }

    }
}