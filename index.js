module.exports = {
    string: require("./lib/String/BetterString").string,
    number: require("./lib/Number/BetterNumber").number
}
String.prototype = require("./index").string
Number.prototype = require("./index").number
console.log()