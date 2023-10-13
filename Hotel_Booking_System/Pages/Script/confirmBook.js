document.getElementById("home-image").style.display = 'none';
let content = `
      <div class="booking-id">
                        <div class="info-head">
                            Booking
                        </div>
                        <div class="info-info">
                            ${reservationId}
                        </div>
                    </div>
                    <div class="checkin-date">
                        <div class="info-head">
                            Check - In
                        </div>
                        <div class="info-info">
                            ${reservationInfo.checkin}
                        </div>
                    </div>
                    <div class="checkoutdate">
                        <div class="info-head">
                            Check-out
                        </div>
                        <div class="info-info">
                            ${reservationInfo.checkout}
                        </div>
                    </div>
                    <div>
                        <div class="info-head">
                            Total Rooms 
                        </div>
                        <div class="info-info">
                            ${reservationInfo.rooms.length}
                        </div>
                    </div>
                    <div>
                        <div class="info-head">
                            Adults 
                        </div>
                        <div class="info-info">
                            ${reservationInfo.rooms.reduce((acc, per) => acc + per.adults, 0)}
                        </div>
                    </div>
                    <div>
                        <div class="info-head">
                            Children 
                        </div>
                        <div class="info-info">
                               ${reservationInfo.rooms.reduce((acc, per) => acc + per.children, 0)}
                        </div>
                    </div>
                    <div class="total">
                        <div class="info-head">
                            Total Price 
                        </div>
                        <div class="info-info">
                            ${reservationInfo.price}
                        </div>
                    </div>
                    <div class="status">
                        <div class="info-head">
                            Status
                        </div>
                        <div class="info-info" style="color: green;
   
    rotate: initial;
    font-weight: bold;
    text-transform: capitalize;">
                            Confirmed
                        </div>
                    </div>
                    <div>
                        <div>
                            <asp:HyperLink runat="server" NavigateUrl="#" >Print</asp:HyperLink>
                        </div>
                    </div>

`;
let parentDiv = document.getElementById("infoConfirm");
parentDiv.innerHTML = content;