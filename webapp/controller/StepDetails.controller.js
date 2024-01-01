sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {

            onInit: function () {

                const oRouteArgs = this.getOwnerComponent().navProps

                const mRouteArgs = this.getOwnerComponent().getModel("oRouteParams")

                const oStepData = this.getOwnerComponent().getModel("progressObj").getData()

                const oActiveStep = oStepData.phases;

                const aStepData = new JSONModel({ stepsArr: Object.entries(oStepData.phases) })

                this.getView().setModel(aStepData, "Step_Data");

                const testObj = {
                    arr: [{ n: "a" }, { n: "b" }, { n: "c" }]
                }

                const testModel = new JSONModel(testObj)

                this.getView().setModel(testModel, "TestModel")

                const stopper = ""

                /*
                
                ?phaseTasks: undefined
                ?subtasks: undefined
                */
            }
        });
    }
);


