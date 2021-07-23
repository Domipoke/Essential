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

Array.prototype.count = function (searched,childs=true,json=false) {
    var arr = this
    var res = 0
    var key = []
    for (var i = 0; i<arr.length; i++) {
        if (arr[i]==searched) {
            res = res + 1
            key.push(i.toString())
        } else {
            if (childs) {
                console.log(Array.isArray(arr[i]))
                if (Array.isArray(arr[i])) {
                    var x = arr[i].count(searched,childs,json)
                    console.log(x)
                    if (x.res>0) {
                        res = res + x.times
                        for (var k = 0; k<x.where.length; k++) {
                            console.log(i,x.where[k])
                            key.push(i.toString()+","+x.where[k])
                        }
                    }
                } else if (json&&JSON.isJSON(arr[i])) {
                    var x = Object.keys(arr[i])
                    for (var k = 0; k<x.length; k++) {
                        if (arr[i][x[k]]==searched) {
                            res = res+1
                            key.push(i.toString()+","+x[k])
                        } else if (Array.isArray(typeof arr[i][x[k]])) {
                            var y = (arr[i][x[k]]).count(searched,childs,json)
                            if (y.res>0) {
                                res = res + y.times
                                for (var k = 0; k<x.where.length; k++) {
                                    key.push(i.toString()+","+x[k]+y.where[k])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return {times: res, where: key}
}

