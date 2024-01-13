/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 * 





I know we'll need an instance of a Build Work Zone in the Cockpit.

I'll need an instance of the HTML5 Application Repository Service.  Should be available in Entitlements.

The app-host plan is the one we want for HTML5 Application Repository Service

And app-host plan and app-runtime, same application

And then the API endpoint for the Cloud Foundry environment, and I think that's it.
And all of this should be free, I got it all for no money in my trial account.






 * 
 */

//test

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
],
    function (UIComponent, Device, JSONModel, History ) {
        "use strict";

        return UIComponent.extend("hipt.hipt.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */

            navProps: {},

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                //this.getRouter().attachEvent("routeMatched", {}, this.onRouteMatched, this)

                const birb = "BRING"




                // set the device model
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setModel(oDeviceModel, "device");

            },

            _TotalProjectCompletion: function(){

            },

            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
    
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = this.getRouter();
                    oRouter.navTo("ProjectDetails", {}, true);
                }
            }


            

            /*
            
            */

        });
    }
);