var { date,number,string, object } = require("./index.js")
String.prototype = string
Number.prototype = number
Date.prototype = date
Object.prototype = object
var x = {
    ciao: "a tutti",
    _ciao: 1234,
    arr: [1234,"ciao"],
    json: {
        ciao: "a tutti",
        _ciao: 1234,
        arr: [1234,"ciao"]
    }
}
(x).log()