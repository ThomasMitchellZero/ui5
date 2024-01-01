sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {

            onInit: function () {
                const efasss = this.getOwnerComponent();
                const oStepData = this.getOwnerComponent().getModel("progressObj").getData()

                const aStepData = Object.entries(oStepData.phases)

                const stopper = ""
            }
        });
    }
);


