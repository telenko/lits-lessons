/**
 * 1. declaration (var some; var someAnother; var some;)
 * 2. write/rewrite (some = '233'; some=34; some = false;)
 * 3. read (some - expression)
 */
var age = 23;
// var age;
// age = 23;

age = "44444";

// logical operators
console.log("::::::::LOGICAL_OPERATORS::::::::::");
var someBoolVar = true;
var someAnotherBoolVar = false;
console.log(2 + 3 - 1 / 23);
/**
 *
 * 0 OR 0 = 0 (чи/або)
 * 0 OR 1 = 1 (чи/або)
 * 1 OR 0 = 1 (чи/або)
 * 1 OR 1 = 1 (чи/або)
 *
 * дозволимо продовати алкоголь якщо
 * 1) особа є 18 років
 * 2) якщо у цієї особи є документ від батьків, який дозволить це зробити
 *
 * 1 OR 1 => 1
 * 0 OR 0 => 0
 * 1 OR 0 => 1
 * 0 OR 1 => 1
 *
 */
var someResultBool = someBoolVar || someAnotherBoolVar; //true || false --> 1 OR 0
console.log(someResultBool);
console.log(true || true);
console.log(false || false);
console.log(false || true || false || true); // (false || true) || false || true ==> (true || false) || true ==> true || true  ==> true

/**
 * 0 AND 0 => 0
 * 0 AND 1 => 0
 * 1 AND 0 => 0
 * 1 AND 1 => 1
 *
 * дозволимо продовати алкоголь якщо
 * 1) особа є 18 років
 * 2) вказано місто/адреса доставки
 *
 * 1 AND 1 ==> 1(true)
 * 1 AND 0 ==> 0 (false)
 * 0 AND 1 ==> 0
 * 0 AND 0 ==> 0
 *
 */
var someResultAndBool = someBoolVar && someAnotherBoolVar;
console.log(someResultAndBool);

var someInversionValue = !someBoolVar;
/**
 *
 * var has18Years = false;//true/false;
 *
 *
 * !has18Years
 *
 */
console.log(someInversionValue);
var PerPerPer; //var PerPerPer=undefined;
var some_word_for_var;

// equality, comparison
console.log(5 > 3);
console.log(5 < 3);
var age = 23;
var has18Years = age > 18;
console.log(has18Years);

age = 14;
has18Years = age > 18;
console.log(has18Years);

console.log(4 >= 4);
console.log(4 <= 4);

var is18Years = age === 18; // ==
console.log(is18Years);

age = 18;
is18Years = age === 18; // ==
console.log(is18Years);

console.log("Andrii" === "Some");
console.log("Some" === "Some");

console.log("testg" > "teste");

console.log(undefined === undefined);
console.log(null === null);

console.log(undefined > undefined);

console.log("some" > 23);

// string operators
/**
 * var name = "Andrii";
 * var surname = "Telenko";
 *
 *
 * Andrii, Telenko
 *
 *
 */
var firstName = "Andrii";
var surname = "Telenko";

var result = firstName + ", " + surname;
console.log(result);

console.log("some: " + "text: " + "concatenated" + ":somegkejg" + "sdfgsg");

console.log("some" - "text");

// number NaN, Infinity, -Infinity
console.log(Infinity);
var someInfinityVar = -Infinity;

console.log(NaN === NaN);
console.log(age === NaN);

// weakly typed system
// 1. variable declaration doesn't require type
// 2. during calculations var type can be changed
console.log("::::::::WEAK_TYPES::::::::::");

// to string
console.log("23" + 2); // ---25 ---> console.log("23" + "2");
console.log(234 + "12");

console.log("some" + true); //console.log("some" + "true");
// to number
console.log(true + 1); // true --> 1, false --> 0
console.log(false + 1);

// to boolean
// 0 - false
// "" - false
// NaN - false
console.log(!0); //console.log(!false);
console.log(!!""); //console.log(!!false);
console.log(!"someText"); //console.log(!true)

// expression
console.log("::::::::EXPRESSIONS::::::::::");

23 + 2;
console.log(23 + 2);
var someVar = 234;
someVar;
console.log(someVar + 567);
console.log(someVar);

// typeof
var someValue = 234;
typeof someValue; // "string" "number" "object" "boolean" "undefined" "function"
console.log(typeof someValue);
someValue = "text";
console.log(typeof someValue);
someValue = true;
console.log(typeof someValue);
someValue = undefined;
console.log(typeof someValue);

// function
console.log(":::::::FUNCTIONS::::::::");
var printTestToConsole = function () {
  console.log("Test");
};

console.log(typeof printTestToConsole);

printTestToConsole();
printTestToConsole();
printTestToConsole();
printTestToConsole();
printTestToConsole();
printTestToConsole();

printTestToConsole = 23;
console.log(typeof printTestToConsole);
printTestToConsole();

function printSomething() {
  //var printSomething
  console.log("something");
}

console.log(typeof printSomething);

printSomething();

/**
 * 1. script повинен виводити в консоль ім'я, фамілію, вік
 * 2. вивести в консоль (Ім'я користувача = Андрій, Фамілія користувача = Теленко, вік користувача = 28);
 * 3. вивести в консоль типи даних усіх ваших змінних
 * 4. перетворити змінну age на текст і вивести в консоль + перевірити її тип (також в консоль)
 * створіть підпрограму, яка буде виводити дані про користувача (1-4)
 * викличте цю програму N разів
 * спробуйте подумати + почитати аргументи функціїї та повернення значення функції (mdn)
 */