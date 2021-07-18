Number.prototype = require("../Number/BetterNumber").number
String.prototype = require("../String/BetterString").string
/**
 * 
 * @param {String} map 
 */
Date.prototype.get = function (map) {
    var d = this;
    if (map.includes("y")) {
        if (map.match("yyyy")) {
            map = map.replace("yyyy",d.getFullYear())
        } else if (map.match("yyy")) {
            map = map.replace("yyy",d.getFullYear().toString().slice(2))
        } else if (map.match("yy")) {
            map = map.replace("yy",d.getFullYear().toString().slice(3))
        } else if (map.match("y")) {
            map = map.replace("y",d.getFullYear().toString().slice(1))
        }
    }
    map = map.replace("mm",d.getMonth().LongestString(2))
    map = map.replace("dd",d.getDate().LongestString(2))
    map = map.replace("h",d.getHours().LongestString(2))
    map = map.replace("ms",d.getMilliseconds())
    map = map.replace("m",d.getMinutes().LongestString(2))
    map = map.replace("s",d.getSeconds().LongestString(2))
    return map
}
/**
 * 
 * @param {Date} date 
 */
Date.prototype.timeFrom = function (date) {
    var diff =  Math.abs(Math.abs(this)-Math.abs(date))
    var time = {
        day:Math.abs(Math.floor(diff.convert("ms","d"))),
        hour:Math.abs(Math.floor(diff.convert("ms","h"))),
        minute:Math.abs(Math.floor(diff.convert("ms","m"))),
        second:Math.abs(Math.floor(diff.convert("ms","s"))),
        millisecond:Math.floor(Math.abs(diff))
    }
    time["all"] = ""
    var totaltime = Math.abs(diff)
    
    if (Math.floor(totaltime.convert("ms","d"))!=NaN) {
        var x = Math.floor(diff.convert("ms","d"))
        if (x>1) {time["all"] = time["all"]+x.toString().append(" days ")}
        else if (x==1) {time["all"] = time["all"]+x.toString().append(" day ")}
    
        totaltime = totaltime.sub(x.convert("d","ms"))
        if (Math.floor(totaltime.convert("ms","h"))!=NaN) {
            var x = Math.floor(totaltime.convert("ms","h"))
            if (x>1) {time["all"] = time["all"]+x.toString().append(" hours ")}
            else if (x==1) {time["all"] = time["all"]+x.toString().append(" hour ")}
            totaltime = totaltime.sub(x.convert("h","ms"))
            
            if (Math.floor(totaltime.convert("ms","m"))!=NaN) {
                var x = Math.floor(totaltime.convert("ms","m"))
                if (x>1) {time["all"] = time["all"]+x.toString().append(" minutes ")}
                else if (x==1) {time["all"] = time["all"]+x.toString().append(" minute ")}
                totaltime = totaltime.sub(x.convert("m","ms"))
                
                if (Math.floor(totaltime.convert("ms","s"))!=NaN) {
                    var x = Math.floor(totaltime.convert("ms","s"))
                    if (x>1) {time["all"] = time["all"]+x.toString().append(" secondes ")}
                    else if (x==1) {time["all"] = time["all"]+x.toString().append(" seconde ")}
                    totaltime = totaltime.sub(x.convert("s","ms"))
                    
                    if (Math.floor(totaltime.convert("ms","ms"))!=NaN) {
                        var x = totaltime
                        if (x>1) {time["all"] = time["all"]+x.toString().append(" milliseconds")}
                        else if (x==1) {time["all"] = time["all"]+x.toString().append(" millisecond")}
                    }
                }
            }
        }
    }
    time["all"] = time["all"].trim()
    return time
}
module.exports.date = Date.prototype