/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hipt/hipt/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
