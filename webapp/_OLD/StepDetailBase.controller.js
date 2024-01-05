sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        //"What are you doing, Step-Detail?"
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetailBase", {

            stepParameters: {},

            farter: function(){ return "Fart"},


            onInit: function () {


            },

            onRouteMatched: function(event){

            },

            onStepClick: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();
                const oEventData = oEvent.getSource().getBindingContext("ActiveScope").getObject()
                const sEventKey = oEventData[0]
                const sNewStepLevel = this.oChildInfo.childStepKey
                const sNavTarget = this.oChildInfo.substepTarget

                const newRoutArgs = this.rtArgs
                newRoutArgs[sNewStepLevel] = sEventKey

                oRouter.navTo(
                    sNavTarget, newRoutArgs
                )



                const stopper = "farrt"
            }
        });
    }
);


