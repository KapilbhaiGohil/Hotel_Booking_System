<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookingForm.aspx.cs" MasterPageFile="~/Pages/HeaderAndFooter.Master" Inherits="Hotel_Booking_System.Pages.BookingForm" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <title>Taj Lake Palace, Udaipur - Grand Palace Hotel in Udaipur at Lake Pichola | Taj Hotels</title>
    <link rel="stylesheet" type="text/css" href="Css/BookingForm.css" />
</asp:Content>
<asp:Content ID="home" ContentPlaceHolderID="MainContent" runat="server">
    <div class="booking-form-outer">
        <div class="booking-heading-upper">
            <span>Review Your Booking</span>
        </div>
        <div class="booking-cover">
            <div class="booking-form-uppe">
                <div class="booking-image">
                    <img src="../Images/tajBookForm.jpeg" width="18%" />
                </div>
                <div class="booking-data">
                    <div class="booking-head">
                        <span>Taj Lake Palace, Udaipur</span>
                        <p>Udaipur, Rajasthan, 313001, Rajasthan, India, India</p>
                    </div>
                    <div class="booking-body">
                        <div class="booking-date">
                            <div>Check in Date</div>
                            <div>Checkout Date</div>
                        </div>
                        <div class="booking-rooms">
                            <div class="booking-data-info">
                                <span>2 Days & 1 Night</span>
                                <span style="float: right;">
                                    <input type="button" value="Change Room" /></span>
                            </div>
                            <div class="booking-each-room-info">
                                <div>
                                    <span>
                                        <img src="../Images/bedIcon.png" width="5%" /></span>
                                    ROOM 1:Palace Room Lake View - 1 Adult | 0 Child
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-form-lower">
                <div class="booking-lower-heading">
                    <h1>Selected rooms</h1>
                </div>
                <div class="booking-lower-visual">
                    <div class="booking-lower-head">
                        <img src="../Images/Rooms/Historical 1 Bedroom Suite Lake View.jpeg"/>
                    </div>
                    <div class="booking-lower-info">
                        <div class="booking-lower-room-img"></div>
                        <div class="booking-loewr-price-info">
                            <span>Rate description:</span>
                            <p>Room only rate include basic Wi-Fi up to 4 Devices. Taxes extra</p>
                            <p>Room only rate include basic Wi-Fi up to 4 Devices. Taxes extra</p>
                            <p>Room only rate include basic Wi-Fi up to 4 Devices. Taxes extra</p>
                        </div>
                        <div class="booking-lower-gauest-info">
                            <div class="man">
                                <span>
                                    <img src="../Images/man.png" width="4%" /></span>
                                <span>1</span>
                            </div>
                            <div class="children">
                                <span>
                                    <img src="../Images/children.png" width="4%" /></span>
                                <span>1</span>
                            </div>
                        </div>
                        <div class="booking-lower-price">
                            <span>₹ 72,500 *</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="travellers-details-outer">
        <h1>Enter Traveller Details</h1>
        <div class="travellers-form">
            <h1>Guest details</h1>
            <div class="actual-form">
                <div class="first-row">
                    <div>
                        <label for="">FirstName*</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label for="">LastName*</label>
                        <input type="text" />
                    </div>
                </div>
                <div class="second-row">
                    <div>
                        <label for="">Email*</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label for="">Country*</label>
                        <input style="width: 6rem; padding: 0.3rem"
                            type="text" value="India(+91)" readonly="true" />
                    </div>
                    <div>
                        <label for="">Phone Number*</label>
                        <input type="number" />
                    </div>
                </div>
                <div class="third-row">
                    <label for="">Special Requests</label>
                    <textarea></textarea>
                </div>
                <div class="agreement">
                    <div>
                        <span>
                            <img src="../Images/checkbox_unchecked.png" width=" 1.2%" /></span>
                        <span>I have read and understood the <a>Privacy Policy.</a>*</span>
                    </div>
                    <div>
                        <span>
                            <img src="../Images/checkbox_unchecked.png" width=" 1.2%" /></span>
                        <span>I have read and agree to the <a>General Terms & Conditions</a>*</span>
                    </div>
                </div>
            </div>
             <div class="final-button-container">
     <input type="button" value="Book" />
 </div>
        </div>
    </div>
    <script src="Script/BookingForm.js"></script>
</asp:Content>
