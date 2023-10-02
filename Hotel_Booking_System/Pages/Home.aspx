<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" MasterPageFile="~/Pages/HeaderAndFooter.Master" Inherits="Hotel_Booking_System.Home" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <title>Taj Lake Palace, Udaipur - Grand Palace Hotel in Udaipur at Lake Pichola | Taj Hotels</title>
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

        <div class="book-info" onclick="toggleForm()">
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
                <input type="button" value="Check Availability" />
            </div>
        </div>
        <div id="toggle-form" style="display: none">
            <div class="overlay"></div>
            <div class="book-form">
                <div class="close-logo">
                    <img src="../Images/close.png" width="15%" onclick="toggleForm()" />
                </div>
                <div class="date-info">
                    <div class="name">
                        <img src="../Images/search-icon.svg" alt="search icon" />
                        <input type="text" name="hotelname" value="Taj Lake Palace, Udaipur" readonly />
                    </div>
                    <div class="from">
                        <p>From:</p>
                        <input type="date" id="setTodaysDate" name="setTodaysDate" />
                    </div>
                    <div class="to">
                        <p>To:</p>
                        <input type="date" id="setTommorowDate" name="setTommorowDate" />
                    </div>
                </div>
                <div class="room-info">
                    <div class="room-outer">
                        <div class="rooms" id="rooms">
                            <div class="room active" id="1">
                                <button type="button" onclick="selectRoom(1)">
                                    <span>Room </span>
                                    <span id="room1">1</span>
                                </button>
                            </div>
                        </div>
                        <div class="add-room-btn">
                            <button onclick="addroom()" type="button" id="addbtn">+Add Room</button>
                        </div>
                    </div>
                    <div class="info" id="info">
                        <div class="infoele" id="infoele1">
                            <div style="border-right: 1px solid #a49494; width: 50%;">
                                ADULTS
                                <button onclick="decrementadult()" type="button"><span>-</span></button>
                                <span id="adultno1">1</span>
                                <button onclick="incrementadult()" type="button"><span>+</span></button>
                            </div>
                            <div>
                                CHILDREN 
                                <button onclick="decrementchild()" type="button"><span>-</span></button>
                                <span id="childno1">1</span>
                                <button onclick="incrementchild()" type="button"><span>+</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- you can add info here-->
                <div class="btn-container">
                    <asp:Button runat="server" Text="Check Availability" />
                </div>
            </div>
        </div>
    </div>
    <div class="home-body">
        <div class="heading">
            <h1><span>Taj Lake Palace</span></h1>
        </div>
        <div>
            <div class="hotel-info-outer">
                <div class="hotel-text">
                    <div>
                        <h4><span>Grand Palace Hotel in Udaipur at Lake Pichola</span></h4>
                        <div class="links">
                            <img src="../Images/map.png" width="1.5%" />
                            <a
                                href="https://www.google.com/maps/search/Taj+Lake+Palace,Udaipur@24.575102,73.679946/@24.575493,73.6799334,17z/data=!3m1!4b1?entry=ttu"
                                target="_blank">P.O Box No. 5, Lake Pichola, Udaipur, Rajasthan, 313001, Rajasthan, India, India
                            </a>
                        </div>
                        <div class="links">
                            <img src="../Images/call.png" width="1.5%" />
                            <a
                                href="tel:+91 2942428800"
                                target="_blank">+91 294-2428800
                            </a>
                        </div>
                        <div class="links">
                            <img src="../Images/icons8-mail-25.png" width="1.5%" />
                            <a
                                href="mailto:lakepalace.udaipur@tajhotels.com"
                                target="_blank">lakepalace.udaipur@tajhotels.com
                            </a>
                        </div>
                        <p id="para">
                            Jag Niwas, constructed between 1743-1746 by Maharana Jagat Singh II, the 62
   <sup>nd</sup>
                            custodian of House of Mewar, was used as a summer retreat by the Mewar Royal family over years until Maharana Bhagwat Singh, Mewar of Udaipur in 1963 converted it into a heritage hotel. A jewel
   <span id="dots">...</span>
                            <button type="button" id="more" onclick="showMoreInfo()">Show More</button>
                        </p>
                    </div>
                    <div class="highlights">
                        <h4>Hotel Highlights</h4>
                        <div>
                            <div>
                                <img src="../Images/map.png" width="4.5%" />
                                <p>18th Century Historic Palace</p>

                            </div>
                            <div>
                                <img src="../Images/lake.png" width="4.5%" />
                                <p>Floating in the Middle of a Lakes</p>
                            </div>
                        </div>
                        <div>

                            <div>
                                <img src="../Images/map.png" width="1.7%" />
                                <p>Exclusive Palace Butler Service</p>
                            </div>
                            <div>
                                <img src="../Images/icons8-food-24.png" width="1.7%" />
                                <p>Royal Historic Boat Romantic Dinner</p>
                            </div>

                        </div>
                    </div>
                    <div class="policy">
                        <h4>Hotel Policies</h4>
                        <ul>
                            <li>Check-in time: 2:00 PM</li>
                            <li>Check-out time: 12:00 Noon</li>
                            <li>Early check-in and late check-out on request.</li>
                            <li>We accept American Express, Diner's Club, Master Card, Visa, JCB International.</li>
                            <li>Pets are not allowed.</li>
                            <li>The Palace is a Resident only facility and all services and facilities are solely for our in house guests. The resident only policy is in place to</li>
                            <li>ensure a tranquil experience for our guests.</li>
                        </ul>
                    </div>
                </div>
                <div class="hotel-image">
                    <div style="padding-bottom: 0.9rem">
                        <img src="../Images/Hotel/1.jpeg" width="100%" height="270rem" />
                    </div>
                    <div id="image-content">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="img-container">
            <img src="../Images/Rooms/Luxury Room Garden Non Lake View.jpeg"/>
        </div>
        <div class="card-info">
            <span>Luxury Room Garden Non Lake View</span>
            <p>Luxury Rooms offer princely-inspired décor with stunning views of the Lily Pond. Each room is unique in size and is adorned with traditional Indian silks and dark teak furniture.</p>
            <div>
                <img src="../Images/area.png"/>
                <span> 21-33 Sq Mt</span>
            </div>
            <div>
                <img src="../Images/wifi.png"/>
                <span>Inclusive of WiFi</span>
            </div>
            <div>
                <img src="../Images/maximumOccoumpany.png"/>
                <span>Up to 2 guests</span>
            </div>
            <div>
                <img src="../Images/bedType.png"/>
                <span>King/Twin</span>
            </div>
        </div>
        <div class="price">
            <p>Starting Rate/Night</p>
            <div>₹37,500*</div>
            <button type="button">VIEW DETAILS</button>
        </div>
    </div>
    <script src="Script/Home.js" type="text/javascript"></script>
</asp:Content>
