Boolean.prototype.log = function () {
    console.log(this.valueOf())
}
module.exports.boolean = Boolean.prototype