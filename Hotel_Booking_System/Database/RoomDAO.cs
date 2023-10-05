using Hotel_Booking_System.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Database
{
    public class RoomDAO
    {
        private readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
        public List<Room> GetRooms()
        {
            List<Room> list = new List<Room>();
            string query = "SELECT * FROM room";
            SqlConnection con = new SqlConnection(connectionString);
            SqlCommand cmd = new SqlCommand(query, con);

            con.Open();
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                string id = rdr["ID"].ToString();
                string type = rdr["type"].ToString();
                string desc = rdr["desc"].ToString();
                string area = rdr["area"].ToString();
                string capasity = rdr["capasity"].ToString();
                string price = rdr["price"].ToString();
                string bedtype = rdr["bedtype"].ToString();
                
                list.Add(new Room(Int32.Parse(id), type, desc, area, Int32.Parse(capasity), Int32.Parse(price), bedtype));
            }

            con.Close();
            cmd.Dispose();
            return list;
        }

    }
}