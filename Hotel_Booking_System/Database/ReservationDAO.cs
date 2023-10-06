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

namespace Hotel_Booking_System.Database
{
    public class ReservationDAO
    {
        private readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
        public bool addReservation(FinalStorageData dt,RoomDAO rd)
        {
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            SqlTransaction transaction = con.BeginTransaction();
            try
            {
                string insertQuery = "INSERT INTO [dbo].[reservation] (checkin, checkout, amount, firstname, lastname, email, phone, specialRequest) " +
                         "VALUES (@checkin, @checkout, @amount, @firstname, @lastname, @email, @phone, @specialRequest)";
                SqlCommand command = new SqlCommand(insertQuery, con);
                command.Parameters.AddWithValue("@checkin", dt.checkin);
                command.Parameters.AddWithValue("@checkout", dt.checkout);
                command.Parameters.AddWithValue("@amount", dt.price);
                command.Parameters.AddWithValue("@firstname", dt.firstname);
                command.Parameters.AddWithValue("@lastname", dt.lastname);
                command.Parameters.AddWithValue("@email", dt.email);
                command.Parameters.AddWithValue("@phone", dt.number);
                command.Parameters.AddWithValue("@specialRequest", dt.specialrequest);
                int reservationId = Convert.ToInt32(command.ExecuteScalar());
                foreach(RoomData room in dt.rooms)
                {
                    string insertIntoReservationRoom = "INSERT INTO reservationeachroom (reservationid, eachroomid, adult, children, price) " +
                         "VALUES (@ReservationId, @EachRoomId, @Adult, @Children, @Price)";
                    int id = rd.getFreeRoomIdByRoomHeading(room.heading);
                    SqlCommand cmd = new SqlCommand(insertIntoReservationRoom, con);
                    command.Parameters.AddWithValue("@ReservationId", reservationId);
                    command.Parameters.AddWithValue("@EachRoomId", 3);
                    command.Parameters.AddWithValue("@Adult", 2);
                    command.Parameters.AddWithValue("@Children", 1);
                    command.Parameters.AddWithValue("@Price", "100.00");
                }
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                throw ex;
            }

            return false;
        }
        public List<Reservation> GetALlReservationIds ()
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