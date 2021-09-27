using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SagitecMVVMClient;

namespace ApplicationPortal
{
    /// <summary>
    /// Startup class
    /// </summary>
    public class Startup : WebStartupBase
    {

        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration)
            : base(configuration)
        {

        }
    }
}
