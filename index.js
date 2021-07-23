module.exports.estring = require("./lib/String/BetterString").string;
module.exports.edate = require("./lib/Date/BetterDate").date;
module.exports.enumber = require("./lib/Number/BetterNumber").number;
module.exports.eobject = require("./lib/Json/BetterJson").object;
module.exports.eboolean = require("./lib/Boolean/BetterBoolean").boolean;
module.exports.earray = require("./lib/Array/BetterArray").array;
module.exports.allInt = require("./lib/CheckTypes/CheckTypes").check.allInt;
module.exports.allArray = require("./lib/CheckTypes/CheckTypes").check.allArray;
module.exports.isInt = require("./lib/CheckTypes/CheckTypes").check.isInt;
module.exports.isArray = require("./lib/CheckTypes/CheckTypes").check.isArray;


module.exports.setAll = function () {
    //    String.prototype = require("./index")
    console.log("done")
}