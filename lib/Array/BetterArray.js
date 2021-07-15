Array.prototype.cut = function (start,end) {
    var out = []
    var array = this
    for (var i=0; i<array.length; i++) {
        if (start <= i && i<=end) {
            out.push(array[i])
        }
    }
    return out;
}
