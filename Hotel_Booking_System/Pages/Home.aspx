<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" MasterPageFile="~/Pages/HeaderAndFooter.Master" Inherits="Hotel_Booking_System.Home" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <link rel="stylesheet" type="text/css" href="Css/Home.css" />
</asp:Content>
<asp:Content ID="home" ContentPlaceHolderID="MainContent" runat="server">
    <div class="home-image">
        <div class="image">
            <img src="../Images/taj.jpg" width="100%" />
        </div>
        <div class="image-title">
            <span>Taj Lake Palace, Udaipur</span>
            <asp:Button ID="Button1" runat="server" Text="Know More" />
        </div>

        <div class="book-info">
            <div>
                <div class="label">Where To?</div>
                <div>Taj Lake Palace, Udaipur</div>
            </div>
            <div>
                <div class="label">Check-In & Check-Oute</div>
                <div>
                    <span id="checkin"></span>
                    <span id="checkout"></span>
                </div>
            </div>
            <div>
                <div class="label">Rooms And Gauests</div>
                <div>Room 1-1 Gauest, 0 Child</div>
            </div>
            <div>
                <asp:Button ID="checkAvailability" runat="server" Text="Check Availability" />
            </div>
        </div>
        <div class="overlay"></div>
        <div class="book-form">
            <div class="date-info">
                <div class="name">
                    <img src="../Images/search-icon.svg" alt="search icon" />
                    <input type="text" value="Taj Lake Palace, Udaipur" readonly />
                </div>
                <div class="from">
                    <p>From:</p>
                    <input type="date" name="setTodaysDate" />  
                </div>
                <div class="to">
                    <p>To:</p>
                    <input type="date" name="setTommorowDate" />
                </div>
            </div>
            <div class="room-info">
                <div class="room">
                    <div>
                        <button>
                            <span>Room </span>
                            <span>1</span>
                        </button>
                    </div>
                    <div>
                        <asp:Button runat="server" Text="+Add Room" ID="addroom" />
                    </div>
                </div>
                <div class="info">
                    <div>
                        Adults
                        <button> <span>-</span></button>
                        <span>1</span>
                         <button> <span>+</span></button>
                    </div>
                    <div>
                        Childerens
                          <button> <span>-</span></button>
                        <span>1</span>
                         <button> <span>+</span></button>
                    </div>
                </div>
            </div>
            <div class="btn-container">
                <asp:Button runat="server" Text="Check Availability" />
            </div>
        </div>
    </div>
    <script src="Script/Home.js" type="text/javascript"></script>
</asp:Content>
