
$(function () {
        if (ns.Settings.ADA.iblnTesting) { return false; }
        ns.Settings.Form.iblnLoading = true;
 });

var nsUserFunctions = nsUserFunctions || {};
(function (nsUserFunctions) {
    nsUserFunctions.InitilizeUserDefinedEvents = function () {
       
    };
	nsUserFunctions.BeforeFrameworkInit = function () {
       
	   return true; // if return false then Framework init will not call, only register events will call
    };
	nsUserFunctions.AfterFrameworkInit = function () {
       
    };
})(nsUserFunctions || (nsUserFunctions = {}));



