jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/kartik/test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/kartik/test/test/integration/pages/App",
	"com/kartik/test/test/integration/pages/Browser",
	"com/kartik/test/test/integration/pages/Master",
	"com/kartik/test/test/integration/pages/Detail",
	"com/kartik/test/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.kartik.test.view."
	});

	sap.ui.require([
		"com/kartik/test/test/integration/NavigationJourneyPhone",
		"com/kartik/test/test/integration/NotFoundJourneyPhone",
		"com/kartik/test/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});