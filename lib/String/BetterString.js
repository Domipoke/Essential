String.prototype.log = function () {
    console.log(this.toString())
}
module.exports.string = String.prototype
