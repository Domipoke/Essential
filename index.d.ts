declare module "@gp4e/essential" {
    declare type refuse = "no"
    declare type ConsoleLogOption = {
        date:"long"|"short"|refuse,
        json:"long"|"short"|refuse,
        jsonSpecification: "yes"|refuse,
        ret: "string"|refuse
    }
    declare type meter = "mm"|"cm"|"dm"|"m"|"dam"|"hm"|"km"
    declare type time = "ms"|"s"|"m"|"h"|"d"
    declare type weight = "mg"|"cg"|"dg"|"g"|"dag"|"hg"|"kg"
    declare type Measure = meter|time|weight
    declare type DateFrom = {
        day: Number,
        hour: Number,
        minute: Number,
        second: Number,
        millisecond: Number
    }
    declare type ArrayCountJSON = {
        times: Number, 
        where: String[]
    }
    interface String {
        log(opt?: ConsoleLogOption):void;
        append(string:string):string;
        toNumber(radix?:Number):Number
    }
    interface Number {
        log(opt?: ConsoleLogOption):void;
        sum(nums:Number[]|Number):Number;
        add(nums:Number[]|Number):Number;
        sub(nums:Number[]|Number):Number;
        multiply(nums:Number[]|Number):Number;
        divide(nums:Number[]|Number):Number;
        LongestString(lenght:Number):String;
        convert(from:Measure,to:Measure):Number;
        repeat(what:string|Function,ret:boolean):string|Object|void;
        msToDateString():String;
    }
    interface Date {
        get(map: String):String;
        timeFrom(date:Date):DateFrom;
    }
    interface JSON {
        out(what:JSON,how:Number):string;
        log(what:JSON,opt?: ConsoleLogOption):void;
        isJSON(what:any):boolean;
    }
    interface Array {
        cut(start:Number,end:Number):Array
        count(searchelement,childs:boolean,json:boolean):ArrayCountJSON
    }
    interface Boolean {
        log():void;
    }
    declare function isArray(any:any):boolean; 
    declare function allArray(any:any):boolean;
    declare function isInt(any:any):boolean;
    declare function allInt(any:any):boolean;
}