using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Database
{

    public class CustomerDAO
    {
        private readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
        public CustomerDAO() {
        
        }
        public void addCustomer()
        {

        }
    }
}