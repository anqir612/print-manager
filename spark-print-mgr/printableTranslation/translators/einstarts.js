var FDMTranslatorMarlin = require('../FDMTranslatorMarlin'),
	util = require('util'),

UltimakerTranslator = function(printerType, printerProfile, material, config) {
    FDMTranslatorMarlin.call(this, printerType, printerProfile, material, config);
    this.jobName = "Spark";
};

util.inherits(UltimakerTranslator, FDMTranslatorMarlin);

UltimakerTranslator.canTranslate = function (printerType, profile, material) {
    return printerType.id === "77dc7878-b9d3-11e5-9912-ba0be0483c18";
};

module.exports = UltimakerTranslator;
