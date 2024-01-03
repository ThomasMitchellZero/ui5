sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        //"What are you doing, Step-Detail?"
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {

            onInit: function () {


                const rtArgs = this.getOwnerComponent().navProps.arguments
                const sRoutName = this.getOwnerComponent().navProps.routeName || "ProjectDetails"

                const sPhaseKey = rtArgs?.["?phase"]
                const sTaskKey = rtArgs?.["?task"]
                const sSubtaskKey = rtArgs?.["?subtask"]


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


