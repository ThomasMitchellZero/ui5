sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        //"What are you doing, Step-Detail?"
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {

            onInit: function () {

                const ownerComp = this.getOwnerComponent()
                const rtArgs = ownerComp.navProps.arguments
                const sRoutName = ownerComp.navProps.routeName || "ProjectDetails"
                const oProject = ownerComp.getModel("progressObj").getData()

                const sPhaseKey = rtArgs?.["?phase"]
                const sTaskKey = rtArgs?.["?task"]
                const sSubtaskKey = rtArgs?.["?subtask"]


                // Possible scopes for StepDetails
                const oScopeInfo = {
                    ProjectDetails: {
                        oDataSrc: oProject,
                        substep: "phases"
                    },
                    PhaseDetails: {
                        oDataSrc: oProject?.phases?.[sPhaseKey],
                        substep: "tasks"
                    },
                    TaskDetails: {
                        oDataSrc: oProject?.phases?.[sPhaseKey]?.tasks?.[sTaskKey],
                        substep: "subtasks"
                    },
                }

                //const oActiveScope = _setActiveScope()
                const targScopeInfo = oScopeInfo[sRoutName]
                const oActiveScope = targScopeInfo.oDataSrc
                oActiveScope.aSteps = Object.entries(oActiveScope[targScopeInfo.substep])

                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")


                const stopper = "farrt"

                /*
                

                */
            },

            onStepClick: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();
                const oData = oEvent.getSource().getBindingContext("ActiveScope").getObject()
                oRouter.navTo(
                    "stepDetails", {
                }
                )



                const stopper = "farrt"
            }
        });
    }
);


