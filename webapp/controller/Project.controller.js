sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("hipt.hipt.controller.Project", {
            onInit: function () {

                const jsonArr = {"phaseArr": ""}
                const abc = Object.entries(jsonArr)
                var oModel = new JSONModel();
                this.getView().setModel(oModel, "customer");

            }
        });
    });
