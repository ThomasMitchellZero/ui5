sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
    ],
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {
            onInit: function () {
                const jsonArr = { "123": "aaa", "234": 15, "099": 22 }
                const abc = Object.entries(jsonArr)
                var oModel = new JSONModel();
                this.getView().setModel(oModel, "customer");
            }
        });
    }
);


