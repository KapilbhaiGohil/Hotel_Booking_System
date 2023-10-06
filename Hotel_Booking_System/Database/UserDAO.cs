    using Hotel_Booking_System.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;

namespace Hotel_Booking_System.Database
{
    public class UserDAO
    {

        public readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;

        public User ValidateUser(string email, string pass)
        {
            User user = null;
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "select * from [user] where email=@email and password = @pass";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@email", email);
            cmd.Parameters.AddWithValue("@pass", pass);
            SqlDataReader rdr = cmd.ExecuteReader();
            if(rdr.Read()) {
                user = new User((int)rdr["id"], rdr["name"].ToString(), rdr["email"].ToString(), rdr["password"].ToString(), rdr["phone"].ToString());
            }
            con.Close();
            cmd.Dispose();
            return user;
        }
        public bool AddUser(User u)
        {
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "insert into user(name,email,password,phone) values(@name,@email,@password,@phone)";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@name", u.Name);
            cmd.Parameters.AddWithValue("@email", u.Email);
            cmd.Parameters.AddWithValue("@password", u.Password);
            cmd.Parameters.AddWithValue("@phone", u.Phone);
            int rows = cmd.ExecuteNonQuery();
            con.Close();
            cmd.Dispose();
            return true;
        }
    }
}