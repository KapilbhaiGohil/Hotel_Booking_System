using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Hotel_Booking_System.Database;

namespace Hotel_Booking_System
{
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session["checkin"] = null;
            Session["checkout"] = null;
            Session["jsrooms"] = null;
        }
    }
}