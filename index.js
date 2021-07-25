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
    const { 
        edate,
        enumber,
        estring, 
        eobject, 
        eboolean, 
        earray,
        isArray,
        allArray,
        isInt,
        allInt
    } = require("./index")
    String.prototype = estring;
    Number.prototype = enumber;
    Date.prototype = edate;
    Object.prototype = eobject;
    Boolean.prototype = eboolean;
    Array.prototype = earray;
}
module.exports.functions = function () {
    return {
        allInt: require("./lib/CheckTypes/CheckTypes").check.allInt,
        allArray: require("./lib/CheckTypes/CheckTypes").check.allArray,
        isInt: require("./lib/CheckTypes/CheckTypes").check.isInt,
        isArray: require("./lib/CheckTypes/CheckTypes").check.isArray,
        switchArrayJSON: require("./lib/CheckTypes/CheckTypes").check.switchArrayJSON
    }
}