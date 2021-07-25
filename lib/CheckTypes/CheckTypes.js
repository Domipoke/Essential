function isArray(any) {
    if (typeof any === "object") {
        var k = Object.keys(any)
        if (allInt(k,true)) {
            return true;
        }
    }
    return false;
}
function allArray(any) {
    for (let i = 0; i < any.length; i++) {
        if (!isArray(any[i])) {
            return false
        }
    }
    return true
}
function isInt(any,parse=false) {
    if (typeof any === "number") {
        if ((Number.parseFloat(any) - Number.parseInt(any))==0) {
            return true
        }
    } else if (typeof any === "string") {
        return isInt(Number.parseFloat(any))
    } else {
        console.log(typeof any)
    }
    return false
}
function allInt(any,parse=false) {
    for (let i = 0; i < any.length; i++) {
        if (!isInt(any[i],parse)) {
            
            return false
        }
    }
    return true
}
function switchArrayJSON(object,to="other") {
    if (isArray(object)) {
        if (to=="other") {
            if (JSON.stringify(object).startsWith("{")) {
                var out = []
                var keys = Object.keys(object)
                for (var i = 0; i<keys;i++) {
                    out.push(object[keys[i]])
                }
                return out
            } else if (JSON.stringify(object).startsWith("[")) {
                var out = {}
                var keys = Object.keys(object)
                for (var i = 0; i<keys;i++) {
                    out[keys[i]] = object[keys[i]]
                }
                return out
            }
        } else if (to=="json") {
            var out = {}
                var keys = Object.keys(object)
                for (var i = 0; i<keys;i++) {
                    out[keys[i]] = object[keys[i]]
                }
                return out
        } else if (to=="array") {
            var out = []
            var keys = Object.keys(object)
            for (var i = 0; i<keys;i++) {
                out.push(object[keys[i]])
            }
            return out
        } 
    }
}




module.exports.check = {
    isArray: isArray,
    allArray: allArray,
    isInt: isInt,
    allInt: allInt,
    switchArrayJSON: switchArrayJSON
};