using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sagitec.BusinessTier;
using Sagitec.Model;
using System.Linq;
using System.Reflection;
using System.Text;

namespace SolutionTemplateAppServer
{
    [Route("api/[controller]/[action]")]
    public class srvCommonController : srvMainDBAccess
    {
        public srvCommonController(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor)
        {

        }

        public static void test()
        {
            var methods = typeof(srvMainDBAccess).GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly);
            StringBuilder str = new StringBuilder();
            //var remmethods = methods.Where(m => !m.Name.ToLower().StartsWith("get")).ToList();
            var remmethods = methods.Where(m => m.Name.ToLower().StartsWith("get")).ToList();
            foreach (var m in remmethods)
            {
                if (m.GetParameters().Length > 1)
                {
                    str.AppendLine($"{m.Name} {string.Join(',', m.GetParameters().ToList())}");
                }
            }
            string result = str.ToString();
        }
    }
}
