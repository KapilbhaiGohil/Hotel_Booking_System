using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services.Description;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Pages
{
    public partial class Login : System.Web.UI.Page
    {
        private readonly string connectionString =  ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
        public UserDAO uDao;
        protected void Page_Load(object sender, EventArgs e)
        {
            uDao = new UserDAO();
        }

        protected void login_button_Click(object sender, EventArgs e)
        {
            string mail = email.Text;
            string password = pass.Text;
            User valid = uDao.ValidateUser(mail, password);
            if (valid == null)
            {
                string errormsg = "Invalid Credential";
                Page.ClientScript.RegisterStartupScript(this.GetType(), "ShowError", "showPopUpMsg('"+ errormsg+ "', true);", true);
            }
            else
            {
                Response.Write(valid.Name);
                Session["user"] = valid;
                Response.Redirect("~/Pages/Home");
            }
        }
        
    }
}