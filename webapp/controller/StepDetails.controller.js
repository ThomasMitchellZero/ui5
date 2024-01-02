sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        //"What are you doing, Step-Detail?"
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {

            onInit: function () {

                const oRouteArgs = this.getOwnerComponent().navProps
                const sPhaseKey = oRouteArgs["?phase"]
                const sTaskKey = oRouteArgs["?task"]
                const sSubtaskKey = oRouteArgs["?subtask"]


                // Possible scopes for StepDetails
                const oProject = this.getOwnerComponent().getModel("progressObj").getData()
                const oPhase = oProject?.phases?.[sPhaseKey]
                const oPhaseTask = oPhase?.tasks?.[sTaskKey]
                const oSubtasks = oPhaseTask?.subtasks?.[sSubtaskKey]

                const _setActiveScope = (oScope, sSubstepKey) => {
                    oScope.aSteps = Object.entries(oScope[sSubstepKey] || {})
                    return oScope
                }

                const oActiveScope =
                    oPhaseTask ? _setActiveScope(oPhaseTask, "subtasks") :
                        oPhase ? _setActiveScope(oPhase, "tasks") :
                            _setActiveScope(oProject, "phases")

                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")

                
                const stopper = "farrt"

                /*
                

                */
            },

            onStepClick: function(){

            }
        });
    }
);


