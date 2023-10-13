<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookingConfirmation.aspx.cs" MasterPageFile="~/Pages/HeaderAndFooter.Master" Inherits="Hotel_Booking_System.Pages.BookingConfirmation" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <title>Taj Lake Palace, Udaipur - Grand Palace Hotel in Udaipur at Lake Pichola | Taj Hotels</title>
    <link rel="stylesheet" type="text/css" href="Css/BookingConfirmation.css" />
</asp:Content>
<asp:Content ID="home" ContentPlaceHolderID="MainContent" runat="server">
    <div class="main-confirm">
        <div class="half-confirm">
            <div class="image-confirm">
                <img src="../Images/confirmBooking.png" />
            </div>
            <div class="head-confirm">
                <h1>Booking Confirmed</h1>
            </div>
        </div>
        <div class="lower-half-confirm">
            <div class="general-confi">
                <p>we are pleased to inform you that you booking request has been received and confirmed</p>
                <p>Your Booking Confirmed, Thank You !</p>
            </div>
            <div class="details-confirm">
                <div class="head-details-confirm">
                    <h3>Booking Details</h3>
                </div>
                <div id="infoConfirm" class="info-confirm">
            
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        let reservationInfo = <%=Session["reservationInfo"] ?? "''"%>;
        let reservationId = <%=Session["bookingId"] ?? "''"%>;
       console.log(reservationInfo);
    </script>
    <script src="Script/confirmBook.js"></script>
</asp:Content>
