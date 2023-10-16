using Hotel_Booking_System.Database;
using Hotel_Booking_System.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hotel_Booking_System.Pages
{
    public partial class ManageBooking : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void findReservation_Click(object sender, EventArgs e)
        {
            try
            {
                int BookingId = Convert.ToInt32(bookingid.Text.Trim());
                string mail = email.Text.Trim();
                ReservationFull Reservation = new ReservationDAO().FindReservationByIdAndEmail(BookingId, mail);
                List<RoomData> RoomsInfo = new RoomDAO().getRoomsByReservationId(Reservation.Id);
                TimeSpan totalDaysSpan = Reservation.checkout - Reservation.checkin;
                int totalDays = (int)totalDaysSpan.TotalDays;
                FinalStorageData dt = new FinalStorageData(Reservation.checkin.Date, Reservation.checkout.Date, Reservation.amount, totalDays, RoomsInfo, Reservation.firstname, Reservation.lastname, Reservation.email, Reservation.phone, Reservation.specialRequest);
                JavaScriptSerializer js = new JavaScriptSerializer();
                Session["reservationInfo"] = js.Serialize(dt);
                Session["bookingId"] = Reservation.Id;
                bookingid.Text = "";
                email.Text = "";
                Response.Redirect("~/Pages/BookingConfirmation");
            }
            catch (Exception ex)
            {
                string script = "showMsgManageBooking('" + ex.Message+"')";
                ClientScript.RegisterStartupScript(this.GetType(), "msgScript", script,true);
            }
        }
    }
}