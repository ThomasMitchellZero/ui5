sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "hipt/hipt/controller/_sharedFunctions"
    ],
    function (BaseController, JSONModel, sharedFns) {
        //"What are you doing, Step-Detail?"
        "use strict";

        return BaseController.extend("hipt.hipt.controller.StepDetails", {


            onInit: function () {
                this.getOwnerComponent().getRouter().attachEvent("routePatternMatched", {}, this.onRoutePatternMatched, this)

                const stopper = "stop"
            },

            onRoutePatternMatched: function (event) {

                // shared functions

                const fParseStepObj = sharedFns.parseStepObj

                const evtArguments = event.getParameter("arguments") || {}
                const evtRouteName = event.getParameter("name") || "ProjectDetails"

                const ownerComp = this.getOwnerComponent()
                const oProject = ownerComp.getModel("progressObj").getData()


                //parse the URL
                let hash = window.location.hash.replace("#/project/", "").replace("#/project", "")


                const aScopeRtSegments = hash ? hash.split("/") : []

                let oActiveScope = oProject
                aScopeRtSegments.forEach((segmentStr) => {
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

                const oChildInfo = oTargetInfo[evtRouteName]
                oActiveScope.aSteps = Object.entries(oActiveScope[oChildInfo.childStepKey] || [])
                for (const entry of oActiveScope.aSteps){
                    entry[1] = {...entry[1], ...fParseStepObj(entry)}
                }

                this.evtArguments = evtArguments
                this.oChildInfo = oChildInfo

                this.getView().setModel(new JSONModel(oActiveScope), "ActiveScope")

                // create the function to handle navigation.

                const stopper = "stop"
            },

            onStepClick: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();
                const oEventData = oEvent.getSource().getBindingContext("ActiveScope").getObject()
                const sEventKey = oEventData[0]
                const sNewStepLevel = this.oChildInfo.childStepKey
                const sNavTarget = this.oChildInfo.substepTarget

                // get the arguments from the incoming event, assign the new argument from the click.
                const newRoutArgs = this.evtArguments
                newRoutArgs[sNewStepLevel] = sEventKey

                oRouter.navTo(
                    sNavTarget, newRoutArgs
                )



                const stopper = "stop"

            }


        });
    }
);


