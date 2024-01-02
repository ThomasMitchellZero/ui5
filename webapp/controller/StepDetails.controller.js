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
                const oTask = oPhase?.tasks?.[sTaskKey]
                const oSubtask = oTask?.subtasks?.[sSubtaskKey]

                // scopes to check in order of more => less specific
                const aScopeRts = [
                    { rt: oSubtask, step: "subtask", substep: null },
                    { rt: oTask, step: "task", substep: "subtasks" },
                    { rt: oPhase, step: "phase", substep: "tasks" },
                    { rt: oProject, step: "project", substep: "phases" },
                ]

                let sActiveScopeLevel = ""

                const _setActiveScope = () => {
                    let output = {}
                    for (let item of aScopeRts) {
                        if (item.rt) {
                            output = item.rt
                            output.aSteps = Object.entries(output[item.substep] || {})
                            sActiveScopeLevel = item.step
                            break
                        }
                    }
                    return output
                }

                const oActiveScope = _setActiveScope()

                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")


                const stopper = "farrt"

                /*
                

                */
            },

            onStepClick: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();
                const oData = oEvent.getSource().getBindingContext("ActiveScope").getObject()
                oRouter.navigate()



                const stopper = "farrt"
            }
        });
    }
);


