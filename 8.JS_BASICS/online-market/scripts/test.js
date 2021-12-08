console.log("-----------DECLARATION-----------");
// declaration
var someVariable;
// write
someVariable = 235; // varname=value
// read    varname
console.log(someVariable);

// shorter variant
var someAnotherVariable = 12;
console.log(someAnotherVariable);

// reassign value
someVariable = 12456;
console.log(someVariable);

console.log("-----------TEXT-----------");
// text types, string
var someTextVar = "some content inside";
// var someTextVar2 = 'some content inside';
console.log(someTextVar);
// console.log(someTextVar2);

someTextVar = "some another text inside";
console.log(someTextVar);
var someText3 = "var er= '444'";
console.log(someText3);

// weak type system
console.log("-----------WEAK_TYPE-----------");
/**
 * strict type language (Java):
 * int someNumber = 23;
 * string someText = "some text inside";
 * someNumber = "text value";//Error
 */
someVariable = "some text, which is not a number";
console.log(someVariable);

// boolean  1 memory unit (1/0), true/false
console.log("-----------BOOLEAN-----------");
var someBoolVar = true;
var someBoolVar2 = false;
console.log(someBoolVar);
console.log(someBoolVar2); // 1) read from RAM ==> false  ==> console.log(false);
console.log(false);

// Literal
console.log("-----------LITERALS-----------");
console.log("some text inside literal");

// Exception
// console.log("-----------LITERALS-----------"

console.log("-----------VAR_NAMING_RULES-----------");
// var 2s3ome3333 = '3';
// var -=+*/#some = '44';
// var var = '3'
// var if
// var else
// var class
// var ""''``
// var змінна = '2';
var ___________somE_var = "2";
var ___________some_var = "2";
var $jquery = "3";

// undefined and null
console.log("-----------NULL_UNDEFINED-----------");
var someVarWithUndefined;
someBoolVar2 = undefined;
console.log(someBoolVar2);

console.log(someVarWithUndefined);

var someVarWithNull = null;
console.log(someVarWithNull);
// Garbage collection

// basic operators (math)
console.log("-----------NULL_UNDEFINED-----------");
var someNumber = 3 + 4;
var someNumber2 = 3 - 4;
var someNumber3 = 3 * 4;
var someNumber4 = 3 / 4;
console.log(someNumber);
console.log(someNumber2);
console.log(someNumber3);
console.log(someNumber4);

var someMoreComplexNumber = 3 * someNumber; // 3 * 7
console.log(someMoreComplexNumber);

console.log((2 + 3) - ((2 * 45) / 34));
console.log((someMoreComplexNumber + 3) - ((someNumber4 * 45) / someNumber4));

console.log("text" - 23);
// Not A Number
var someNaN = NaN;
console.log(someNaN);
console.log(Number.isNaN(someNaN));
