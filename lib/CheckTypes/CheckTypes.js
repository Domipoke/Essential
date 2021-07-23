function isArray(any) {
    if (typeof any === "object") {
        var k = Object.keys(any)
        if (allInt(k)) {
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
function isInt(any,parse) {
    if (typeof any === "number") {
        if ((any - Number.parseInt(any))==0) {
            return true
        }
    }
    return false
}
function allInt(any) {
    for (let i = 0; i < any.length; i++) {
        if (!isInt(any[i])) {
            
            return false
        }
    }
    return true
}

module.exports.check = {
    isArray: isArray,
    allArray: allArray,
    isInt: isInt,
    allInt: allInt
};