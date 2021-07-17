Number.prototype = require("../Number/BetterNumber").number
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
    var diff = Math.abs(this)-Math.abs(date)
    var time = {
        day: Math.floor(diff.convert("ms","d")),
        hour: Math.floor(diff.convert("ms","h")),
        minute: Math.floor(diff.convert("ms","m")),
        second: Math.floor(diff.convert("ms","m")),
        millisecond:Math.floor(diff)
    }
    return time
}
module.exports.date = Date.prototype