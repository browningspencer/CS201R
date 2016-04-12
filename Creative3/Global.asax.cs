using System.Web.Http;
 
protected void Application_Start(object sender, EventArgs e)
        {
            RouteTable.Routes.MapHttpRoute(
            name: "ActionApi",
            routeTemplate: "api/{controller}/{action}/{incurrcode}/{incurrvalue}/{outcurrcode}",
            defaults: new { incurrvalue = System.Web.Http.RouteParameter.Optional }
            );
        }