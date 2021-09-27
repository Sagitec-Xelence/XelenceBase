
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.Common;
using Sagitec.MetaDataCache;
using Sagitec.Common;
using Sagitec.DBCache;
using Sagitec.BusinessTier;
using Sagitec.RulesLanguage.Interface;
using Sagitec.BusinessObjects;
using Sagitec.Model;
using Sagitec.Bpm;
using Newtonsoft.Json;
using System.Xml;
using System.Web;
using Sagitec.FileProcessing;

namespace SolutionTemplateAppServer
{
    public class AppServer
    {
        public static StringBuilder Log = new StringBuilder();
        public static List<MTCacheItems> MTCache = new List<MTCacheItems>();
        public static List<DbCacheItems> DbCache = new List<DbCacheItems>();
        public static BPMService iobjBPMService;
        public static busMQRequestHandler iobjSystemQueueRequestHandler;
        public static bool LoadCache()
        {
            try
            {
                srvMetaDataCache.LoadXMLCache();
            }
            catch (Exception ex)
            {
                WriteLog(JsonConvert.SerializeObject(ex));
            }
            return true;
        }

        public static void WriteLog(string astrMassage)
        {
            Log.AppendLine($"{DateTime.Now} : {astrMassage} <br/>");
            Console.WriteLine($"{DateTime.Now} : {astrMassage} <br/>");
            utlThreadSafeFileLogger.LoggerInstance.WriteToLog(astrMassage);
        }

        public static void ApplicationStop()
        {
            if (iobjSystemQueueRequestHandler != null)
            {
                utlThreadSafeFileLogger.LoggerInstance.WriteToLog("Stopping System Queue RequestHandler service.");
                iobjSystemQueueRequestHandler.StopProcessing();
            }

            if (iobjBPMService != null)
            {
                utlThreadSafeFileLogger.LoggerInstance.WriteToLog("Stopping BPM service.");
                iobjBPMService.Stop();
            }
        }

        public static void Start(IConfiguration configuration)
        {
            busFileDtl obj = new busFileDtl();
            DbProviderFactories.RegisterFactory("System.Data.SqlClient", System.Data.SqlClient.SqlClientFactory.Instance);
            AppSettingsHelper.Instance.InitializeAppSettings(configuration);
            //Disable buttons while loading.
            WriteLog("Starting BT...");
            WriteLog("Loading MetaData Cache....");
            var t1 = Task.Run(() => LoadCache());
            bool lblnLoadResult = t1.Result;

            foreach (stcCacheInfo lstcCacheInfo in srvMetaDataCache.icolCacheInfo)
            {

                MTCacheItems lvi = new MTCacheItems();
                lvi.FileName = lstcCacheInfo.istrName;
                lvi.Dir = lstcCacheInfo.istrDirectory;
                lvi.Status = lstcCacheInfo.istrStatus;
                lvi.Type = lstcCacheInfo.istrType;
                MTCache.Add(lvi);
            }

            if (!lblnLoadResult)
                WriteLog(srvMetaDataCache.isbLoadResult.ToString());

            WriteLog($"{srvMetaDataCache.icolCacheInfo.Count.ToString()} XML files successfully loaded and cached at " + DateTime.Now);
            System.Threading.Thread.Sleep(2000);

            WriteLog("Loading Database Cache....");


            t1 = Task.Run(() => srvDBCache.LoadCacheInfo());
            bool lblnSuccess = t1.Result;

            if (lblnSuccess)
            {
                int i = 0;
                foreach (KeyValuePair<string, string> query in srvDBCache.iarrDBCacheInfo)
                {
                    DbCacheItems lvi = new DbCacheItems();
                    lvi.TableName = query.Key;
                    lvi.Total = srvDBCache.iarrRowCount[i].ToString().PadLeft(12);
                    lvi.Query = (query.Value);
                    DbCache.Add(lvi);
                    i++;
                }

                WriteLog($"{srvDBCache.iarrDBCacheInfo} queries successfully executed and cached at " + DateTime.Now);
                System.Threading.Thread.Sleep(2000);
            }
            else
            {
                WriteLog(srvDBCache.istrResult);
            }

            WriteLog("Calling CompileRules...");
            CompileRules();

            WriteLog("starting BPM...");
            if (string.IsNullOrEmpty(SystemSettings.Instance.EmbeddedModulesToSkip) || !SystemSettings.Instance.EmbeddedModulesToSkip.Contains("BPM"))
            {
                iobjBPMService = new BPMService("BPMService", Environment.MachineName);
                iobjBPMService.Start();
            }
            srvMainDB.iblnBTReady = true;

            //Add code for audit log and communication processing

            WriteLog("Completed Initialization");
            utlThreadSafeFileLogger.LoggerInstance.FlushLog();

            WriteLog("Stating task for SystemQueue");
            Task SystemQueue = Task.Run(() =>
            {
                try
                {
                    iobjSystemQueueRequestHandler = new busMQRequestHandler(utlConstants.SystemQueue);
                    iobjSystemQueueRequestHandler.iintMaximumTaskCount = 20;
                    iobjSystemQueueRequestHandler.StartProcessing();
                }
                catch (Exception ex)
                {
                    WriteLog("Following Error occured while instantiating AuditLogQueue processer : " + ex.Message);
                }
            });

            utlThreadSafeFileLogger.LoggerInstance.FlushLog();
        }

        private static void CompileRules()
        {
            try
            {
                IRulesEngine lobjRulesEngine = srvMainDB.iobjRulesEngine;
                var llstRuleResult = lobjRulesEngine.CompileAll();
                if (llstRuleResult != null && llstRuleResult.Count > 0)
                {

                    StringBuilder lstrRulesError = new StringBuilder();
                    foreach (var lobjRuleResult in llstRuleResult)
                    {
                        foreach (var lobjMessage in lobjRuleResult.ilstErrorNotifications)
                        {
                            lstrRulesError.AppendLine($"Rule : {lobjRuleResult.istrDisplayName}, Message : {lobjMessage.istrMessage}");
                        }
                    }
                    string lstrMessage = lstrRulesError.ToString();
                    //if (lstrMessage.Length > 0)
                    //{
                    //    WriteLog(lstrMessage);
                    //}
                }
            }
            catch (Exception er)
            {
                WriteLog("error occured in loading business rules " + er.Message + "\n" + er.StackTrace.ToString());
            }
        }
        public class DbCacheItems
        {
            public string TableName { get; internal set; }
            public string Total { get; internal set; }
            public string Query { get; internal set; }
        }
        public class MTCacheItems
        {
            public string FileName { get; internal set; }
            public string Dir { get; internal set; }
            public string Status { get; internal set; }
            public string Type { get; internal set; }
        }
    }
}