Number.prototype = require("../Number/BetterNumber").number
Object.prototype.isJSON = function (what) {
    var x,y
    try {
        x = JSON.stringify(what)
        y = JSON.parse(x)
    } catch (e) {
        console.error(e)
        return false
    }
    if (x.trim().startsWith("{")&&x.trim().endsWith("}")) {
        return true
    } else {
        return false
    }
}




Object.prototype.out = function (what,how) {
    var out="";
    var keys = Object.keys(what)
    for (var i = 0; i<keys.length; i++) {
        out=out+how.repeat("\t")+keys[i]+": "
        
        if (typeof what[keys[i]]=="object"&&JSON.isJSON(what)) {
            out=out+JSON.log(what[keys[i]],{
                date:"no",
                json:"long",
                ret:"string"
            },how+1)
        } else if (typeof what[keys[i]]=="object"&&Array.isArray(what)) {
            out=out+what[keys[i]]
        } else {
            out=out+what[keys[i]].toString()
        }
        if (i!=(keys.length-1)) {
            out=out+","
        }
        out=out+"\n"
    }
    return out
}
Object.prototype.log = function (what,opt,space=1) {
    var out = "";
    if (opt!=null&&opt!=undefined) {
        if (opt["date"]!=null&&opt["date"]!=undefined) {
            if (opt["date"]=="long") {
                var d = new Date()
                var fd = d.get("dd/mm/yyyy h:m:s:ms")
                out = "["+ fd + "]  " + out
            } else if (opt["date"]=="short") {
                var d = new Date()
                var fd = d.get("h:m:s:ms")
                out = "["+ fd + "]  " + out
            }
        }
        if (opt["json"]!=null&&opt["json"]!=undefined) {
            if (opt["json"]=="long") {
                
                if (JSON.isJSON(what)) {
                    if (opt["jsonSpecification"]!=null&&opt["jsonSpecification"]!=undefined) {
                        if (opt["jsonSpecification"]=="yes") {
                            out=out+"JSON OBJECT: {\n"
                        } else {
                            out=out+"{\n"
                        }
                    } else {
                        out=out+"{\n"
                    }
                    out=out+JSON.out(what,space)
                    out=out+(space-1).repeat("\t")+"}"
                } else if (Array.isArray(what)) {
                    out=out+JSON.stringify(what)
                }
            } else if (opt["json"]=="short") {
                if (opt["date"]=="long"||opt["date"]=="short") {
                    out=out+"    "
                }
                out=out+JSON.stringify(what)

            } else {
                out=out+JSON.stringify(what)
            }
        }
    }
    if (out.length==0) {
        out=out+JSON.stringify(what)
    }
    if (opt["ret"]!=null||opt["ret"]!=undefined) {
        if (opt["ret"]=="string") {return out}
        else console.log(out)
    } else {
        console.log(out)
    }
}


module.exports.object = Object.prototype