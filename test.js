const { edate,enumber,estring, eobject, eboolean } = require("./index")
String.prototype = estring
Number.prototype = enumber
Date.prototype = edate
Object.prototype = eobject
Boolean.prototype = eboolean

