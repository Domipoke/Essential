Number.prototype.sum = function (nums) {
    var x = this
    for (var i = 0; i < nums.length; i++) {
        x = x + nums[i]
    }
    return x
}

Number.prototype.sub = function (nums) {
    var x = this
    for (var i = 0;i<nums.length;i++) {
        x = x - nums[i]
    }
    return x
}

Number.prototype.multiply = function (nums) {
    var x = this
    for (var i = 0;i<nums.length;i++) {
        x = x * nums[i]
    }
    return x
}

Number.prototype.divide = function (nums) {
    var x = this
    for (var i = 0;i<nums.length;i++) {
        x = x * nums[i]
    }
    return x
}

Number.prototype.log = function () {
    console.log(this.valueOf())
}

module.exports.number = Number.prototype
