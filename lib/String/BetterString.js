Number.prototype = require("../Number/BetterNumber").number
Date.prototype = require("../Date/BetterDate").date
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

/**
String.prototype.toHTML = function () {
    var e = this.toString()
    if (e.startsWith("<")&&e.endsWith(">")) {
        if (e.startsWith("<")&&e.endsWith("/>")) {
            e = e.slice(1,e.length-2)
        } else {
            e = e.slice(1,e.length-1)
        }
        var att = e.split(" ")
        var tag = att.shift()
        var htmle = document.createElement(tag)
        if (att.length>0) {
            for (var i = 0; i<att.length;i++) {
                var a = att[i].split("=")
                var atb = a[0] 
                var val = a[1].slice(1,a.length-1)
                if (atb==undefined||atb==null) {
                    atb = ""
                }
                if (val==undefined||val==null) {
                    val = ""
                }
                htmle.setAttribute(atb,val)
            }
        }
        return htmle
    } else {
        return undefined
    }
}
 */

String.prototype.append = function (string) {
    var s = this.toString();
    s=s+string;
    return s
}

String.prototype.toNumber = function (radix=10) {
    var s = this.toString()
    var i;
    if (s.includes(",")) {s=s.replace(",",".")}
    if (s.includes(".")) {i=Number.parseFloat(s)}
    else {i=Number.parseInt(s,radix)};
    return i
}
module.exports.string = String.prototype
