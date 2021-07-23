Number.prototype.sum = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = Number.parseFloat(x) + Number.parseFloat(nums)
    } else {
        for (var i = 0; i < nums.length; i++) {
            x = Number.parseFloat(x) + Number.parseFloat(nums[i])
        }
    }
    return Number.parseFloat(x)
}
Number.prototype.add = Number.prototype.sum
Number.prototype.sub = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = Number.parseFloat(x) - Number.parseFloat(nums)
    } else {
        for (var i = 0;i<nums.length;i++) {
            x = Number.parseFloat(x) - Number.parseFloat(nums[i])
        }
    }
    return Number.parseFloat(x)
}

Number.prototype.multiply = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = Number.parseFloat(x) * Number.parseFloat(nums)
    } else {
        for (var i = 0;i<nums.length;i++) {
            x = Number.parseFloat(x) * Number.parseFloat(nums[i])
        }
    }
    return Number.parseFloat(x)
}

Number.prototype.divide = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = Number.parseFloat(x) / Number.parseFloat(nums)
    } else {
        for (var i = 0;i<nums.length;i++) {
            x = Number.parseFloat(x) / Number.parseFloat(nums[i])
        }
    }
    return Number.parseFloat(x)
}

Number.prototype.log = function (opt) {
    var out = this.valueOf()
    if (opt!=undefined && opt!=null) {
        if (opt["date"]!=undefined && opt["date"]!=null) { 
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

Number.prototype.LongestString = function (max) {
    var v = this.valueOf().toString()
    for (let i = v.length; i < max; i++) {
        v = "0"+v
    }
    return v
}

/**
 * 
 * @param {String} from 
 * @param {String} to 
 */
Number.prototype.convert = function (from,to) {
    var measures = {
        meter: {
            value: ["mm","cm","dm","m","dam","hm","km"],
            change: [10,10,10,10,10,10]
        },
        time: {
            value: ["ms","s","m","h","d"],
            change: [1000,60,60,24]
        },
        weight: {
            value: ["mg","cg","dg","g","dag","hg","kg"],
            change: [10,10,10,10,10,10]
        }, 
    }
    if (from==to) {
        return this
    } else if (measures.meter.value.includes(from)&&measures.meter.value.includes(to)) {
        var constant = 1;
        var fromindex = measures.meter.value.indexOf(from)
        var toindex = measures.meter.value.indexOf(to)
        if (fromindex<toindex) {
            for (var i = fromindex;i<toindex;i++) {
                constant = constant.multiply([measures.meter.change[i]])
            }
            var res = this.divide(constant)
            return res
        } else {
            var constant = 1
            for (var i = toindex;i<fromindex;i++) {
                constant = constant.multiply([measures.meter.change[i]])
            }
            
            var res = this.multiply(constant)

            return res
        }
    } else if (measures.time.value.includes(from)&&measures.time.value.includes(to)) {
        var constant = 1;
        var fromindex = measures.time.value.indexOf(from)
        var toindex = measures.time.value.indexOf(to)
        if (fromindex<toindex) {
            for (var i = fromindex;i<toindex;i++) {
                constant = constant.multiply([measures.time.change[i]])
            }
            var res = this.divide(constant)
            return res
        } else {
            var constant = 1
            for (var i = toindex;i<fromindex;i++) {
                //console.log("constant: \nbefore:"+constant)
                constant = constant.multiply([measures.time.change[i]])
                //console.log("after:"+constant)
            }
            var res = this.multiply(constant)
            return res
        }
    } else if (measures.weight.value.includes(from)&&measures.weight.value.includes(to)) {
        var constant = 1;
        var fromindex = measures.weight.value.indexOf(from)
        var toindex = measures.weight.value.indexOf(to)
        if (fromindex<toindex) {
            for (var i = fromindex;i<toindex;i++) {
                constant = constant.multiply([measures.weight.change[i]])
            }
            var res = this.divide(constant)
            return res
        } else {
            var constant = 1;
            for (var i = toindex;i<fromindex;i++) {
                constant = constant.multiply([measures.weight.change[i]])
            }
            var res = this.multiply(constant)
            return res
        }
    }

}

Number.prototype.repeat = function (what,ret=false) {
    if (typeof what == "string") {
        var out = ""
        for (var i = 0; i<this.valueOf() ;i++) {
            out=out+what
        }
        return out
    } else if (typeof what == "function") {
        var out = []
        for (var i = 0; i<this.valueOf() ;i++) {
            if (ret) {
                out.push(what())
            } else {
                what()
            }
        }
        if (ret) {
            return out
        }
    }
} 
Number.prototype.msToDateString = function () {
    var totaltime = Math.abs(this)
    var time = ""
    if (Math.floor(totaltime.convert("ms","d"))!=NaN) {
        var x = Math.floor(totaltime.convert("ms","d"))
        if (x>1) {time = time+x.toString().append(" days ")}
        else if (x==1) {time = time+x.toString().append(" day ")}
    
        totaltime = totaltime.sub(x.convert("d","ms"))
        if (Math.floor(totaltime.convert("ms","h"))!=NaN) {
            var x = Math.floor(totaltime.convert("ms","h"))
            if (x>1) {time = time+x.toString().append(" hours ")}
            else if (x==1) {time = time+x.toString().append(" hour ")}
            totaltime = totaltime.sub(x.convert("h","ms"))
            
            if (Math.floor(totaltime.convert("ms","m"))!=NaN) {
                var x = Math.floor(totaltime.convert("ms","m"))
                if (x>1) {time = time+x.toString().append(" minutes ")}
                else if (x==1) {time = time+x.toString().append(" minute ")}
                totaltime = totaltime.sub(x.convert("m","ms"))
                
                if (Math.floor(totaltime.convert("ms","s"))!=NaN) {
                    var x = Math.floor(totaltime.convert("ms","s"))
                    if (x>1) {time = time+x.toString().append(" secondes ")}
                    else if (x==1) {time = time+x.toString().append(" seconde ")}
                    totaltime = totaltime.sub(x.convert("s","ms"))
                    
                    if (Math.floor(totaltime.convert("ms","ms"))!=NaN) {
                        var x = totaltime
                        if (x>1) {time = time+x.toString().append(" milliseconds")}
                        else if (x==1) {time = time+x.toString().append(" millisecond")}
                    }
                }
            }
        }
    }
    return time
}
module.exports.number = Number.prototype
