Date.prototype = require("../Date/BetterDate").date
Number.prototype = require("../Number/BetterNumber").number
String.prototype.log = function (opt) {
    var out = this.toString()
    if (opt!=undefined&&opt!=null) {
        if (opt["date"]!=undefined&&opt["date"]!=null) {
            if (opt["date"]=="long") {
                var d = new Date()
                var fd = d.get("dd/mm/yyyy h:m:s:ms")
                out = "["+ fd + "]  " + out
            } else if (opt["date"]=="short") {
                var d = new Date()
                var fd = d.get("h:m:s:ms")
                out = "["+ fd + "]  " + out
            }
        } else {
            console.log(out)
        }
        if (opt["ret"]!=null||opt["ret"]!=undefined) {
            if (opt["ret"]=="string") {return out}
            else console.log(out)
        } else {
            console.log(out)
        }
    } else {
        console.log(out)
    }
}

module.exports.string = String.prototype
