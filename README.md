# Essential

To import better
- String
- Number
- Date
- Boolean

copy this in your file 

const { edate,enumber,estring, eobject, eboolean } = require("@gp4e/essential")
String.prototype = estring
Number.prototype = enumber
Date.prototype = edate
Object.prototype = eobject
Boolean.prototype = eboolean

if one of this variables are just used you can use this: