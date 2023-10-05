<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Hotel_Booking_System.Pages.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="icon" href="../Images/logo.png" style="width:10%;"/>
    <title>Taj Login</title>
    <link rel="stylesheet" type="text/css" href="Css/Login.css" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="error" id="error">
            <div class="error-text"id="error-text" style="display:none"></div>
        </div>
        <div class="login-outer">
            <div class="login-heading">
                <div>
                    <img src="../Images/logo.png"  width="10%" />
                    <span>Welcome Back To Hotel Taj</span>
                       <p>Sign in to proceed.</p>
                </div>
            </div>
            <div class="login-main">
                <div class="login-text">
                    <span>Login</span>
                </div>
                <div class="input-email">
                    <asp:TextBox runat="server" ID="email" type="email" placeholder="Enter Email ID" AutoCompleteType="Email"/>
                    <asp:TextBox runat="server" ID="pass" type="password" placeholder="Enter Password"/>
                </div>
                <div class="login-privacy">
                    <span><img src="../Images/checkbox_unchecked.png" onclick="changeCheckbox()" id="checkbox" width="1.3%"/></span>
                    <span>I agree to the</span>
                    <a href=""> Privacy Policy</a>
                </div>
                <div class="login-button">
                    <!--<input type="button" value="Continue" id="login_button"/>-->
                    <asp:Button Text="Continue" disabled ="true" ID="login_button" runat="server" OnClick="login_button_Click"/>
                </div>
                <div class="login-terms">
                    <span>By continuing you agree to our</span>
                    <a href="">Terms of Use</a>
                </div>
            </div>
        </div>
        <script src="Script/login.js" type="text/javascript"></script>
    </form>
</body>
</html>
