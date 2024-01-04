sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    ],
    function (BaseController, JSONModel) {
        //"What are you doing, Step-Detail?"
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {

            onInit: function () {

                this.getRouter().attachEvent("routeMatched", {}, this.onRouteMatched, this)

                const ownerComp = this.getOwnerComponent()
                const rtArgs = ownerComp.navProps.arguments || {}
                const sActiveRtName = ownerComp.navProps.routeName || "ProjectDetails"
                const oProject = ownerComp.getModel("progressObj").getData()



                const hash = window.location.hash.replace("#/project/", "")

                const aScopRt = hash? hash.split("/") : []

                let oActiveScope = oProject
                aScopRt.forEach((segmentStr) => {
                    oActiveScope = oActiveScope?.[segmentStr]
                })

                const oTargetInfo = {
                    ProjectDetails: {
                        childStepKey: "phases",
                        substepTarget: "PhaseDetails",
                    },
                    PhaseDetails: {
                        childStepKey: "tasks",
                        substepTarget: "TaskDetails"
                    },
                    TaskDetails: {
                        childStepKey: "subtasks",
                        substepTarget: "SubtaskDetails"
                    }
                }

                const oChildInfo = oTargetInfo[sActiveRtName]

                oActiveScope.aSteps = Object.entries(oActiveScope[oChildInfo.childStepKey])

                this.rtArgs = rtArgs
                this.oChildInfo = oChildInfo

                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")

                const stopper = "farrt"

                /*
                

                */
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


