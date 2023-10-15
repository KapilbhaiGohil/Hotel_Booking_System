using iText.Kernel.Pdf;
using iText.Layout;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iText.Html2pdf;
namespace Hotel_Booking_System.Pages
{
    public partial class BookingConfirmation : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            // Response.Write(Session["reservationInfo"]);
            Response.Write(HttpContext.Current.Server.MapPath("/Pages/"));
        }
        protected void print_Click(object sender, EventArgs e)
        {
            using(MemoryStream pdfstream = new MemoryStream()) {
                ConverterProperties properties = new ConverterProperties();
                properties.SetBaseUri(HttpContext.Current.Server.MapPath("/Pages/"));
                string htmlContent = hiddenInnerHtml.Value;
                HtmlConverter.ConvertToPdf(htmlContent, pdfstream,properties);
                Response.Clear();
                Response.ContentType = "application/pdf";
                Response.AddHeader("content-disposition", "inline;filename=bill.pdf");
                Response.BinaryWrite(pdfstream.ToArray());
                Response.Flush();
                Response.End();
            }
        }
    }
}