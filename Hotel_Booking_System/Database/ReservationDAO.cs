using Hotel_Booking_System.Models;
using Hotel_Booking_System.Pages;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Database
{
    public class ReservationDAO
    {
        private readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
       


        public List<Reservation> GetALlReservationIds()
        {
            List<Reservation> reservationIds = new List<Reservation>();
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "select id,checkin,checkout from reservation";
            SqlCommand cmd = new SqlCommand(@query, con);
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                int id = (int)rdr["id"];
                DateTime checkin = DateTime.Parse(rdr["checkin"].ToString());
                DateTime checkout = DateTime.Parse(rdr["checkout"].ToString());
                reservationIds.Add(new Reservation(id, checkin, checkout));
            }
            con.Close();
            cmd.Dispose();
            return reservationIds;
        }
        public List<int> getAllReservationConflicts(DateTime checkin, DateTime checkout)
        {
            List<int> conflictedResIds = new List<int>();
            List<Reservation> allres = new ReservationDAO().GetALlReservationIds();
            foreach (Reservation reservation in allres)
            {
                if (reservation.checkin <= checkout && reservation.checkout >= checkin)
                {
                    conflictedResIds.Add(reservation.Id);
                }
            }
            return conflictedResIds;
        }
        public void template()
        {
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "";
            SqlCommand cmd = new SqlCommand(@query, con);

            SqlDataReader rdr = cmd.ExecuteReader();
            cmd.Dispose();
            con.Close();
        }
    }
}