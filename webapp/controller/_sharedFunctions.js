sap.ui.define(["sap/base/i18n/ResourceBundle"], function (ResourceBundle) {
    "use strict";

    return {

        classText: function (sClass) {
            var oResourceBundle = ResourceBundle.create({ url: "i18n/i18n.properties" });

            switch (sClass) {
                case "C":
                    return oResourceBundle.getText("flightClassC");
                case "Y":
                    return oResourceBundle.getText("flightClassY");
                case "F":
                    return oResourceBundle.getText("flightClassF");
                default:
                    return sClass;
            }
        },

        parseStepObj(step) {

            // step might be an array from Object.entries
            const oCompletion = step[1]?.completion || step.completion

            const oStatusParams = {
                Error: {title: "Error", icon: "sap-icon://error"},
                Information: {title: "In Progress", icon: "sap-icon://pending"},
                None: {title: "Not Started", icon: "sap-icon://circle-task"},
                Success: {title: "Success", icon: "sap-icon://status-completed"},
                Warning: {title: "No Status", icon: "sap-icon://high-priority"},
            }

            //circle-task-2
            //sap-icon://future


            let oStepStatus = {
                fraction: `${oCompletion.complete} / ${oCompletion.total}`
            }

            if (oCompletion?.failure) { oStepStatus.sStatus = "Error" } // Something failed
            else if (oCompletion.complete === oCompletion.total) { oStepStatus.sStatus = "Success" } // all steps complete
            else if (oCompletion.inProgress) { oStepStatus.sStatus = "Information" } // in progress, not finished
            else (oStepStatus.sStatus = "None") // not started

            oStepStatus = {...oStepStatus, ...oStatusParams[oStepStatus.sStatus]}

            return oStepStatus

        }



    };

});