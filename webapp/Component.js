/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

//App URL https://099bc242trial.authentication.us10.hana.ondemand.com/oauth/authorize?response_type=code&client_id=sb-launchpad-dt-approuter!t1483&redirect_uri=https%3A%2F%2F099bc242trial.launchpad.cfapps.us10.hana.ondemand.com%2Flogin%2Fcallback%3FauthType%3Dxsuaa&state=a330ab9d-0d36-4c51-b381-2d75a7a9d4b9

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel"

],
    function (UIComponent, Device, JSONModel) {
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

            navProps: { dong: "Long" },

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                this.getRouter().attachEvent("routeMatched", {}, this.onRouteMatched, this)

                const birb = "BRING"


                // set the device model
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setModel(oDeviceModel, "device");

            },

            onRouteMatched: function (event) {
                const routeParams = event.getParameter("arguments") || {}
                this.navProps = routeParams
                this.setModel(new JSONModel(routeParams), "oRouteParams")

                const stopper = ""

            }
        });
    }
);