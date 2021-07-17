Number.prototype.sum = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = x + nums
    } else {
        for (var i = 0; i < nums.length; i++) {
            x = x + nums[i]
        }
    }
    return x.valueOf()
}

Number.prototype.sub = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = x - nums
    } else {
        for (var i = 0;i<nums.length;i++) {
            x = x - nums[i]
        }
    }
    return x.valueOf()
}

Number.prototype.multiply = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = x * nums
    } else {
        for (var i = 0;i<nums.length;i++) {
            x = x * nums[i]
        }
    }
    return x.valueOf()
}

Number.prototype.divide = function (nums) {
    var x = this
    if (typeof nums == "number") {
        x = x / nums
    } else {
        for (var i = 0;i<nums.length;i++) {
            x = x / nums[i]
        }
    }
    return x.valueOf()
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
    }
    console.log(out)
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
            change: [10,10,10,10,10,10,10]
        },
        time: {
            value: ["ms","s","m","h","d"],
            change: [1000,60,60,60,24]
        },
        weight: {
            value: ["mg","cg","dg","g","dag","hg","kg"],
            change: [10,10,10,10,10,10,10]
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
            for (var i = fromindex-1;toindex<=i;i--) {
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
            for (var i = fromindex-1;toindex<=i;i--) {
                constant = constant.multiply([measures.time.change[i]])
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
            for (var i = fromindex-1;toindex<=i;i--) {
                constant = constant.multiply([measures.weight.change[i]])
            }
            var res = this.multiply(constant)
            return res
        }
    }

}

Number.prototype.repeat = function (what) {
    if (typeof what == "string") {
        var out = ""
        for (var i = 0; i<what ;i++) {
            out=out+what
        }
        return out
    }
} 

module.exports.number = Number.prototype
