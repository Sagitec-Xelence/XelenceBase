var nsUserFunctions = nsUserFunctions || {};
(function (nsUserFunctions) {
    nsUserFunctions.InitilizeUserDefinedEvents = function () {
        var fnLoadActionExportBundle = function () {
            var BaseExportToPDF = nsNeoControl.sfwActionExport.prototype.processClientExport;
            nsNeoControl.sfwActionExport.prototype.processClientExport = function (e) {
                if (["wfmQueryPlanVisualiserMaintenance", "wfmDatabaseRecommendationsMaintenance"].indexOf(ns.viewModel.currentForm) >= 0) {
                    var lstrActiveDivID = this.istrActiveDivID;
                    var instance = this;
                    var lbtnSelf = instance.idomElement;
                    var lstrGridID = lbtnSelf.getAttribute(nsConstants.SFW_RELATED_CONTROL);
                    var lobjGridWidget = nsCommon.GetWidgetByActiveDivIdAndControlId(lstrActiveDivID, lstrGridID);
                    if (lobjGridWidget == undefined || lobjGridWidget.jsObject == undefined) {
                        return false;
                    }
                    if (lobjGridWidget.iintRecordLength == 0) {
                        nsCommon.DispalyMessage(DefaultMessages.NoRecordPresentToExport, lstrActiveDivID);
                        return false;
                    }
                    var lobjPdfOptions = {};
                    lobjPdfOptions.Title = instance.getAttributeValue("PageTitle");
                    lobjPdfOptions.Subject = instance.getAttributeValue("PageSubject");
                    lobjPdfOptions.Author = instance.getAttributeValue("PdfAuthor") || ns.Settings.Export.iobjPdfOptions.Author || "<Unknown>";
                    lobjPdfOptions.Creator = instance.getAttributeValue("PdfCreator") || ns.Settings.Export.iobjPdfOptions.Creator || "<Unknown>";
                    lobjPdfOptions.PageType = instance.getAttributeValue("PageMode") || ns.Settings.Export.iobjPdfOptions.PageMode || "l";
                    lobjPdfOptions.PaperType = instance.getAttributeValue("PageType") || ns.Settings.Export.iobjPdfOptions.PageType || "a4";
                    lobjPdfOptions.PointScale = instance.getAttributeValue("PointScale") || "pt";
                    lobjPdfOptions.PageHeight = instance.getAttributeValue("PageHeight");
                    lobjPdfOptions.PageWidth = instance.getAttributeValue("PageWidth");
                    lobjPdfOptions.AddHeader = instance.getAttributeValue("AddHeader", nsConstants.FALSE).toLowerCase() === nsConstants.TRUE;
                    lobjPdfOptions.HeaderInfoText = instance.getAttributeValue("HeaderInfoText");
                    lobjPdfOptions.MaxNoOfColumns = instance.getAttributeValue("MaxNoOfColumns", 0);

                    var fnScriptLoad = function () {
                        if (lobjGridWidget.iarrGridColumns != undefined && lobjGridWidget.iarrGridColumns.length > 0) {
                            var larrExportCols = [];
                            larrExportCols.push(lobjGridWidget.iarrGridColumns[lobjGridWidget.iarrGridColumns.length - 1][nsGridConstants.istrColField]);
                            var lstrFileName = instance.getAttributeValue("sfwFileName");
                            if (lstrFileName == null || lstrFileName == "") {
                                var lstrTemp = nsCommon.GetFormTitleByDivId(lstrActiveDivID);
                                lstrFileName = lstrTemp !== undefined ? lstrTemp : "ExportPdf";
                            }
                            lstrFileName = [lstrFileName, ".pdf"].join("");
                            lobjGridWidget.jsObject.exportToExcel({ columns: larrExportCols, fileName: lstrFileName, iblnExportSelectedRows: false, iblnExportToPdf: true, iobjPdfOptions: lobjPdfOptions, istrActiveDivID: lstrActiveDivID });
                        }
                    };
                    nsNeoControl.NeoControl.LoadFile(utlBundleName.ExportPdf, fnScriptLoad, undefined, undefined, lstrActiveDivID);
                }
                else {
                    this.BaseExportToPDF = BaseExportToPDF;
                    this.BaseExportToPDF();
                }   
            };
        }
        nsNeoControl.NeoControl.LoadFile(utlBundleName.sfwActionExport, fnLoadActionExportBundle);
    };
	nsUserFunctions.BeforeFrameworkInit = function () {
       
	   return true; // if return false then Framework init will not call, only register events will call
    };
	nsUserFunctions.AfterFrameworkInit = function () {
       
    };
})(nsUserFunctions || (nsUserFunctions = {}));


