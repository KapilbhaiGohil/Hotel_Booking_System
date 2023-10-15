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
        public int BookRoom(FinalStorageData dt)
        {
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            SqlTransaction transaction = con.BeginTransaction();
            try
            {
                List<int> ConfliectResIds = new ReservationDAO().getAllReservationConflicts(dt.checkin, dt.checkout);
                string insertQuery = "INSERT INTO reservation (checkin, checkout, amount, firstname, lastname, email, phone, specialRequest,date) " +
                    "VALUES (@checkin, @checkout, @amount, @firstname, @lastname, @email, @phone, @specialRequest, @date);SELECT SCOPE_IDENTITY();";
                SqlCommand command = new SqlCommand(insertQuery, con, transaction);
                command.Parameters.AddWithValue("@checkin", dt.checkin);
                command.Parameters.AddWithValue("@checkout", dt.checkout);
                command.Parameters.AddWithValue("@amount", dt.price);
                command.Parameters.AddWithValue("@firstname", dt.firstname);
                command.Parameters.AddWithValue("@lastname", dt.lastname);
                command.Parameters.AddWithValue("@email", dt.email);
                command.Parameters.AddWithValue("@phone", dt.number);
                command.Parameters.AddWithValue("@specialRequest", dt.specialrequest);
                command.Parameters.AddWithValue("@date", DateTime.Now);
                int reservationId = Convert.ToInt32(command.ExecuteScalar());
                List<int> AddedIds = new List<int>();
                string getEachRoomIdQeryCopy = @"select top(1) id from eachroom where RoomTypeId = 
                        (
	                        select id from room where type = @roomType
                        ) and id in (select id from eachroom where id not in(
	                        select eachroomid from reservationeachroom where reservationid in ({0})
                        )) and id not in ({1});";
                foreach (RoomData room in dt.rooms)
                {
                    string conflictedRoomsParam = ConfliectResIds.Count > 0 ? string.Join(",", ConfliectResIds) : "NULL";
                    string alreadyAddedIds = AddedIds.Count > 0 ? string.Join(",", AddedIds) : "-1";
                    string getEachRoomIdQery = string.Format(getEachRoomIdQeryCopy, conflictedRoomsParam, alreadyAddedIds);
                    SqlCommand geteachroomidcmd = new SqlCommand(getEachRoomIdQery, con, transaction);
                    geteachroomidcmd.Parameters.AddWithValue("@roomType", room.heading);

                    int eachRoomId = Convert.ToInt32(geteachroomidcmd.ExecuteScalar());
                    // Response.Write("<h5>" + eachRoomId + "</h5><br>");
                    // Response.Write("<h5>" + reservationId + "</h5><br>");
                    string insertIntoReservationRoom = "INSERT INTO reservationeachroom (reservationid, eachroomid, adult, children, price) " +
                      "VALUES (@ReservationId, @EachRoomId, @Adult, @Children, @Price);SELECT SCOPE_IDENTITY();";
                    SqlCommand cmd = new SqlCommand(insertIntoReservationRoom, con, transaction);
                    cmd.Parameters.AddWithValue("@ReservationId", reservationId);
                    cmd.Parameters.AddWithValue("@EachRoomId", eachRoomId);
                    cmd.Parameters.AddWithValue("@Adult", room.adults);
                    cmd.Parameters.AddWithValue("@Children", room.children);
                    cmd.Parameters.AddWithValue("@Price", room.price);
                    int newid = Convert.ToInt32(cmd.ExecuteScalar());
                    AddedIds.Add(eachRoomId);

                }
                transaction.Commit();
                return reservationId;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                return 0;
            }
            finally
            {
                con.Close();
                transaction.Dispose();
            }
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