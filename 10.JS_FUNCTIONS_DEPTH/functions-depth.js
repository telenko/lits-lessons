// expression
// 2 + 5
// someVar
// someVar + '23';
// (2 + 3) * 3
var someVar = "34";
someVar;
// console.log((someVar));

var someVar2 = "35";
var someVar3 = "36";
var someVar4 = "37";
var some = (someVar2, someVar3, someVar4, 252363); //
console.log((someVar2, someVar3, someVar4));

// funtions can create vars
var someVarForFunc = "214325";
var someOutside = 2;
window.someVarForFunc = "2345";
var someFuncToTest = function () {
  var someVarInsideFunc = 23;
  console.log("TEST" + someVarInsideFunc);

  var someVarForFunc = 123;
  console.log(
    "INSIDE IS" + someVarForFunc + "AND window value is" + window.someVarForFunc
  );
};
someFuncToTest();

// console.log(someVarInsideFunc);
console.log("OUTSIDE IS" + someVarForFunc);

// variable scope
/**
 * global scope: var can be accessed anywhere
 *      1) var some = '3'; //outside any function
 *      2) window.someGlobalVar = '233';
 * local scope: var can be accessed only inside a function
 */

// Everything is a function

// arguments
// sum //2 5 --> console
// sum // 124124 124125125  --> console
var sum = function (a, b) {
  // var a = 2;
  // var b = 3;

  // ---
  // var a = 2235235;
  // var b = 3235235235;
  //
  var sumResult = a + b;
  console.log("SUM is = " + sumResult);
};

sum(2, 3 + 12423); // var a = 2; var b = 12426
sum(2235235, 3235235235);
var someNumber1 = 1;
var someNumber2 = 2;
sum(someNumber1, someNumber2);

sum(); // var a = undefined; var b = undefined; console.log(undefined + undefined);

/**
 *
 * INPUT ---->>> FUNCTION (MATH CALCULATIONS) ---->>> OUTPUT
 *
 */
// var someVal = sum(12, 124) / sum(144, 1254);

// returning a value
var sumWithReturn = function (a, b) {
  console.log("SOMETHING");
  return a + b;
};
var someVal = sumWithReturn(12, 124) / sumWithReturn(144, 1254);
console.log("RESULT IS = " + someVal);

var someFailureReturnExample = function () {
  return 23;
  console.log("DF");
  var a = "3";
};

// ax^2 + bx + c = 0;  --> 2x2 + 4x + 2 = 0
var resolveQuadratic = function (a, b, c) {
  var descriminant = b * b - 4 * a * c;
  var x1 = (-b + Math.sqrt(descriminant)) / (2 * a); //NaN
  return x1;
};

var xResolvedOne = resolveQuadratic(1, 5, 2);
console.log("RESULT QUADRATIC IS " + xResolvedOne);

var xResolvedTwo = resolveQuadratic(1, 5, 123);
console.log("RESULT QUADRATIC IS " + xResolvedTwo);

// function as an argument
var print = function (text) {
  // first-class function : Functional Programming
  console.log("Wow: " + text);
};

var doPrintSomething = function (printer) {
  printer("some");
  console.log("Sklndsglnsdgkgn");
};

doPrintSomething(print); // var printer = print;
// doPrintSomething(2); // var printer = 2; // 2()

var higherOrderFunction = function () {
  var someFunc = function () {
    console.log("DDFDDDD");
  };

  return someFunc;
};

var resultOfHOC = higherOrderFunction();
resultOfHOC();

// condition
var sellAlcohol = function (age) {
  // to boolean
  // 0 - false
  // "" - false
  // NaN - false
  // undefined - false
  // null - false
  // "some" - true
  // 2425 - true
  var is18YearsOld = age >= 18;
  //   var someVar = 133;
  if (is18YearsOld) {
    // weak transfer to boolean
    console.log("Wow, you have bought successfully!! Congrats!!");
  } else {
    console.log("You cannt buy this thing!!!");
  }
};
var sellAlcohol2 = function (age) {
  if (age < 18) {
    return;
  }
  console.log("Wow, you have bought successfully!! Congrats!!");
};

sellAlcohol(29);
sellAlcohol(19);
sellAlcohol(9);

var congrats = function (n) {
  switch (n) {
    case 1000: {
      console.log("Congrats! You is 1000!!!");
      return; // return; -> return undefined;
    }
    case 2000: {
      console.log("Congrats! You is 2000!!!");
      break;
    }
    default: {
      console.log("Sorry, it's not your day :(");
      break;
    }
  }
  console.log("DDDD");
};

congrats(2000);
congrats(1000);
congrats(3000);
congrats(3523);

var resolveQuadraticNew = function (a, b, c) {
  var descriminant = b * b - 4 * a * c;
  if (descriminant < 0) {
    console.log("We cann't calculate the number :(");
  } else {
    var x1 = (-b + Math.sqrt(descriminant)) / (2 * a);
    return x1;
  }
  // return undefined;
};

console.log(resolveQuadraticNew(1, 2, 1));
console.log(resolveQuadraticNew(1, 2, 23));

var someResultOfQuadratic = resolveQuadraticNew(1, 2, 23);

console.log(sellAlcohol());

// Alt+Shift+F

// homework
/**
 * 1. write any math function you find formula (f.e. find cosx by knowing sinx, or find hypotenuse by catets, find square area of a triangle etc)
 * 1. * write a function of searching N item in Fibonacci sequence (with or without recursion)
 * 2. use conditions to prevent errors in your functions
 * 3. switch case, if else, if else if, type convertion rules in javascript
 */
