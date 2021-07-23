const { 
    edate,
    enumber,
    estring, 
    eobject, 
    eboolean, 
    earray, 
    allInt,
    allArray,
    isInt,
    isArray,
} = require("./index")
String.prototype = estring;
Number.prototype = enumber;
Date.prototype = edate;
Object.prototype = eobject;
Boolean.prototype = eboolean;
Array.prototype = earray;

/*
var x = ["ciao","1",122323,"l",["1"],{
    a: "ciao",
    b: "1",
    c: 1,
    d: [1,1,1,1,"ciao",{a:"ciao",b:"1",c:[{x:1,y:2,z:3,q:[{x:[{x:[1]}]}]}]}]
},1,1,1,1,1,1111,1]
JSON.log(x.count(1,true,true),{json:"long"})
*/
var x = {
    0: "ciao",
    1: "cia",
    2: "ci",
    3: "c",
    4: ""
}
var y = ["ciao","cia", "ci","c",""]
console.log(isArray(x))
console.log(isArray(y))

console.log(allInt(Object.keys(y)))
