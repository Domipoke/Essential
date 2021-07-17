declare type ConsoleLogOption = {
    date:"long"|"short"|"no"
}
declare type meter = "mm"|"cm"|"dm"|"m"|"dam"|"hm"|"km"
declare type time = "ms"|"s"|"m"|"h"|"d"
declare type weight = "mg"|"cg"|"dg"|"g"|"dag"|"hg"|"kg"
declare type Measure = meter|time|weight
interface String {
    log(opt?: ConsoleLogOption):void;
}
interface Number {
    log(opt?: ConsoleLogOption):void;
    sum(nums:Number[]):Number;
    sub(nums:Number[]):Number;
    multiply(nums:Number[]):Number;
    divide(nums:Number[]):Number;
    LongestString(lenght:Number):String;
    convert(from:Measure,to:Measure):Number;
}
interface Date {
    get(map: String):String;
    timeFrom(date:Date):void;
}