<%@ Page Language="C#" ValidateRequest="false" AutoEventWireup="true" CodeBehind="BookingConfirmation.aspx.cs" MasterPageFile="~/Pages/HeaderAndFooter.Master" Inherits="Hotel_Booking_System.Pages.BookingConfirmation" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <title>Taj Lake Palace, Udaipur - Grand Palace Hotel in Udaipur at Lake Pichola | Taj Hotels</title>
    <link rel="stylesheet" type="text/css" href="Css/BookingConfirmation.css" />
</asp:Content>
<asp:Content ID="home" ContentPlaceHolderID="MainContent" runat="server">
    <div id="pdfcontent">
        <div class="main-confirm" id="mainContent">
            <div class="half-confirm">
                <div class="image-confirm">
                    <img src="../Images/confirmBooking.png" />
                </div>
                <div class="head-confirm">
                    <h1>Thank You</h1>
                </div>
            </div>
            <div class="lower-half-confirm">
                <div class="general-confi">
                    <p style="font-weight: bold;">IDENTIFICATION REQUIRED</p>
                    <p>Driving License |Voter ID Card |Aadhaar Card |Bank Pass Book with Photograph |Passport and valid visa(mandatory for foreign nationals)</p>
                </div>
                <div class="details-confirm">
                    <div class="head-details-confirm">
                        <h3>Booking Details</h3>
                    </div>
                    <div id="infoConfirm" class="info-confirm">
                    </div>
                    <div class="print-conform">
                        <input type="button" onclick="captureHtmlAndSubmit()" id="print" value="PRINT" />
                        <asp:Button runat="server" OnClick="print_Click" Style="display: none" ID="print_submit" />
                    </div>
                </div>
            </div>
            <input type="hidden" value="hiddenInputForData" runat="server" id="hiddenInnerHtml" />
        </div>
    </div>
    <script type="text/javascript">
       
        let hiddenInnerHtmlId = '<%=hiddenInnerHtml.ClientID%>';
        let print_submitId = '<%=print_submit.ClientID%>';
        function captureHtmlAndSubmit() {
            let htmlContent = document.getElementById("pdfcontent").innerHTML;
            document.getElementById(hiddenInnerHtmlId).value =
                `
                   <!DOCTYPE html>
                    <html>
                    <head>
                            <link rel="stylesheet" type="text/css" href="Css/pdf.css" />
                    </head>
                   <body>
                `+
                htmlContent +
                `</body>
                </html>
                `;
            console.log(document.getElementById(hiddenInnerHtmlId).value);
            document.getElementById(print_submitId).click();
        }



        let reservationInfo = <%=Session["reservationInfo"] ?? "''"%>;
        let reservationId = <%=Session["bookingId"] ?? "''"%>;
        console.log(reservationInfo);
    </script>
    <script src="Script/confirmBook.js"></script>
</asp:Content>
