using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Sagitec.BusinessTier;
using Sagitec.Common;
using Sagitec.TracingManager.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SolutionTemplateAppServer
{
    public class Startup : AppStartUpBase
    {
        public Startup(IConfiguration configuration) : base(configuration)
        {
        }
        public override void RegisterCustomExceptionPublisher(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var ExceptionConfig = Configuration.GetSection("ExceptionManagement");
            GlobalHolder.iobjExecptionMgrSettings = (new ExceptionManagerSectionHandler()).CreateFromCore(ExceptionConfig);
        }

        public override void InitializeBT(IApplicationBuilder app, IWebHostEnvironment env)
        {
            AppServer.Start(Configuration);
        }

        public override void OnApplicationStop()
        {
            utlThreadSafeFileLogger.LoggerInstance.WriteToLog("Stopping Application....");
            AppServer.ApplicationStop();
            base.OnApplicationStop();
            utlThreadSafeFileLogger.LoggerInstance.FlushLog();
        }
    }
}
