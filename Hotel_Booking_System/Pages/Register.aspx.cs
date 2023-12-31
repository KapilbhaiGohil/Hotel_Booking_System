﻿using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Pages
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void register_button_Click(object sender, EventArgs e)
        {
            string Name = name.Text;
            string mail = email.Text;
            string password = pass.Text;
            string phone = number.Text;
            if(phone.Length != 10)
            {
                ClientScript.RegisterStartupScript(this.GetType(), "msg", "showMsg(" + new JavaScriptSerializer().Serialize(new Message("Pls Enter a valid mobile no", Status.Error)) + ")", true);

            }
            else
            {
                User u = new User(Name, mail, password, phone);
                bool res = new UserDAO().AddUser(u);
                if (res)
                {
                    name.Text = "";
                    email.Text = "";
                    pass.Text = "";
                    number.Text = "";
                    Session["msg"] = new Message("Sucessfully Registerd", Status.successful);
                    Response.Redirect("~/Pages/Login");
                }
                else
                {
                    ClientScript.RegisterStartupScript(this.GetType(), "msg", "showMsg(" + new JavaScriptSerializer().Serialize(new Message("Email or Phone is already Registered try another mail or phone", Status.Error)) + ")", true);
                }
            }
          

        }
    }
}