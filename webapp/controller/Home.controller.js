sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("hipt.hipt.controller.Home", {
            onInit: function () {


            },

            onHomeClick: function () {
                const oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("ProjectDetails")
            }
        });
    }
);
