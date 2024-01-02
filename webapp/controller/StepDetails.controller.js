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

                const aScopeRts = [
                    { rt: oSubtask, step: "subtask", substep: null },
                    { rt: oTask, step: "task", substep: "subtasks" },
                    { rt: oPhase, step: "phase", substep: "tasks" },
                    { rt: oProject, step: "project", substep: "phases" },
                ]

                let sActiveScopeLevel = ""


                /*
                    const _setActiveScope = (scopeStr, substepKeyStr) => {
                    const oTargetScope = oScopeLevel[scopeStr]
                    oTargetScope.aSteps = Object.entries(oTargetScope[substepKeyStr] || {})
                    sActiveScopeLevel = scopeStr
                    return oScopeLevel
                }
                
                */


                /*

                                const oActiveScope =
                    oPhaseTask ? _setActiveScope(oPhaseTask, "subtasks") :
                        oPhase ? _setActiveScope(oPhase, "tasks") :
                            _setActiveScope(oProject, "phases")

                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")

                                const oActiveScope =
                    oScopeLevel.task ? _setActiveScope("task", "subtasks") :
                        oScopeLevel.phase ? _setActiveScope("phase", "tasks") :
                            _setActiveScope("project", "phases")

                
                */

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

                /*
                                for(let item of aScopeRts){
                    if(item.rt){
                        let oActiveScope = item.rt
                        oActiveScope.aSteps = Object.entries(oActiveScope[item.substep] || {})
                        sActiveScopeLevel = item.step
                        break
                    }
                }
                
                
                */




                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")


                const stopper = "farrt"

                /*
                

                */
            },

            onStepClick: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();
                const oItem = oEvent.getSource()
                const oPars = oItem.getBindingContext("ActiveScope");
                const oContext = oPars.getObject();
                const oData = oEvent.getSource().getBindingContext("ActiveScope").getObject()




                const stopper = "farrt"
            }
        });
    }
);


