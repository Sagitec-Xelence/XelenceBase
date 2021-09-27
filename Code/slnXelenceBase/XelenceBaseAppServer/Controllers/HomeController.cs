using Microsoft.AspNetCore.Mvc;

namespace SolutionTemplateAppServer
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            ViewBag.Log = AppServer.Log.ToString();
            ViewBag.DbCache = AppServer.DbCache;
            ViewBag.MTCache = AppServer.MTCache;
            return View();
        }
    }
}
