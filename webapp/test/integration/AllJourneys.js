jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 CatalogCollection in the list
// * All 3 CatalogCollection have at least one Services

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
		"com/kartik/test/test/integration/MasterJourney",
		"com/kartik/test/test/integration/NavigationJourney",
		"com/kartik/test/test/integration/NotFoundJourney",
		"com/kartik/test/test/integration/BusyJourney",
		"com/kartik/test/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});