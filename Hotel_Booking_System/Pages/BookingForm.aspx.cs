using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Pages
{

    public class FinalStorageData
    {
        public DateTime checkin;
        public DateTime checkout;
        public long price;
        public int totaldays;
        public List<RoomData> rooms;
        public string firstname;
        public string lastname;
        public string email;
        public string number;
        public string specialrequest;
    }
    public class RoomData
    {
        public string heading;
        public string price;
        public string adults;
        public string children;
    }
    public partial class BookingForm : System.Web.UI.Page
    {
        private readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void finalBookButton_Click(object sender, EventArgs e)
        {
            FinalStorageData dt = JsonConvert.DeserializeObject<FinalStorageData>(hiddenField.Value);
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            SqlTransaction transaction = con.BeginTransaction();
            try
            {
                List<int> ConfliectResIds = new ReservationDAO().getAllReservationConflicts(dt.checkin, dt.checkout);
                string insertQuery = "INSERT INTO reservation (checkin, checkout, amount, firstname, lastname, email, phone, specialRequest) " +
                    "VALUES (@checkin, @checkout, @amount, @firstname, @lastname, @email, @phone, @specialRequest);SELECT SCOPE_IDENTITY();";
                SqlCommand command = new SqlCommand(insertQuery, con, transaction);
                command.Parameters.AddWithValue("@checkin", dt.checkin);
                command.Parameters.AddWithValue("@checkout", dt.checkout);
                command.Parameters.AddWithValue("@amount", dt.price);
                command.Parameters.AddWithValue("@firstname", dt.firstname);
                command.Parameters.AddWithValue("@lastname", dt.lastname);
                command.Parameters.AddWithValue("@email", dt.email);
                command.Parameters.AddWithValue("@phone", dt.number);
                command.Parameters.AddWithValue("@specialRequest", dt.specialrequest);
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
                    Response.Write(getEachRoomIdQery +" \n<br>");
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
                    Response.Write("<h5>" + newid + "</h5><br>");
                    AddedIds.Add(eachRoomId);

                }
                transaction.Commit();
                Response.Redirect("~/Pages/Home");
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                Response.Write(ex);
            }
            finally
            {
                con.Close();
                transaction.Dispose();
            }
        }
    }
}