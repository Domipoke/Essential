var { date,number,string } = require("./index.js")
String.prototype = string
Number.prototype = number
Date.prototype = date
var n = 1
n.convert("m","km").log()