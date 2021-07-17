Object.prototype.out = function (how) {
    var keys = Object.keys(this)
    for (var i = 0; i<keys.length; i++) {
        out=out+how.repeat("\t")+keys[i]+": "
        if (typeof this[keys[i]]=="object") {
            out=out+this[keys[i]].out(how+1)
        } else {
            out=out+this[keys[i]]
        }
        out=out+"\n"
    }
}


Object.prototype.log = function (what,opt) {
    var out;
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
                if (opt["date"]=="long"||opt["date"]=="short") {
                    out=out+"    "
                }
                out="JSON OBJECT: {\n"
                out=out+what.out(1)
                out=out+"\n}"
                
            } else if (opt["json"]=="short") {
                if (opt["date"]=="long"||opt["date"]=="short") {
                    out=out+"    "
                }
                out=out+what.toString()

            } else {
                out=out+what.toString()
            }
        }
    }
    if (out.length==0) {
        out=out+what.toString()
    }
    console.log(out)
}


module.exports.object = Object.prototype