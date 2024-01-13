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

        /*        

        ----Value Colors----

        sap.m.ValueColor.Critical
            Critical value color.

        Visibility: public
            sap.m.ValueColor.Error

        sap.m.ValueColor.Good
            Good value color.

        sap.m.ValueColor.Neutral
            Neutral value color.

        sap.m.ValueColor.None
            
        */



        parseStepObj(step) {

            // step might be an array from Object.entries
            const oCompletion = step[1]?.completion || step.completion

            const oStatusParams = {
                Error: { title: "Error", valueColor: "Error", icon: "sap-icon://error" },
                Information: { title: "In Progress", valueColor: "Neutral", icon: "sap-icon://pending" },
                None: { title: "Not Started", valueColor: "Neutral", icon: "sap-icon://circle-task" },
                Success: { title: "Complete", valueColor: "Good", icon: "sap-icon://status-completed" },
                Warning: { title: "No Status", valueColor: "Critical", icon: "sap-icon://high-priority" },
            }


            let oStepStatus = {
                fraction: `${oCompletion.complete} / ${oCompletion.total}`,
                percentage: (oCompletion.complete / oCompletion.total * 100) || 0
            }

            if (oCompletion?.failure) { oStepStatus.sStatus = "Error" } // Something failed
            else if (oCompletion.complete === oCompletion.total) { oStepStatus.sStatus = "Success" } // all steps complete
            else if (oCompletion.inProgress) { oStepStatus.sStatus = "Information" } // in progress, not finished
            else (oStepStatus.sStatus = "None") // not started

            oStepStatus = { ...oStepStatus, ...oStatusParams[oStepStatus.sStatus] }

            return oStepStatus

        },




    };

});