// overview hw, overview arrays
var someObject1 = { a: 3 };
var someObject = {
  name: "344",
  age: 234,
  someMathValue: someObject1,
};

var someText = "text"; // "text"
console.log(someText === "text"); // "text"=== "text"

var someObject3 = { a: someObject }; // 0x80000xxaa
var someObject4 = someObject3; // 0x80000xxaa

var wagonCoupe = { availableSeats: 23, type: "coupe", sets: ["1", "2"] };
var plazkartType = "plazkart";

var wagonList = [
  wagonCoupe,
  { availableSeats: 0, type: plazkartType },
  { availableSeats: 14, type: "coupe" },
]; // 0xx8888x11  ==>
var loco = { engineType: "electric", personalRequired: 2 };

var train = {
  //0x35235235
  wagonList: wagonList,
  loco: loco,
  direction: {
    from: "Mykolaiv",
    to: "Kyiv",
  },
  time: "19:45",
  date: "23.12.2021",
};

var train2 = {
  //0x35235236
  wagonList: wagonList,
  loco: loco,
  direction: {
    from: "Mykolaiv",
    to: "Kyiv",
  },
  time: "19:45",
  date: "23.12.2021",
};
train === train2; // false

var tagsList = ["some", "tags"];
var someDeepObject = {
  some: "SDSS",
  someObject: {
    a: 23,
    tags: tagsList,
  },
};

var someVeryBadArray = ["2", 3, true, undefined, {}, [], null];

var someFakeArray = [1, 2, 3]; //someFakeArray.length
someFakeArray[3] = 4; //[1,2,3,4], someFakeArray.length -> 4

// Homework
var usa = {
  name: "USA",
  population: 340000000,
};

var ukraine = {
  name: "Ukraine",
  population: 40000000,
};

var countries = [
  usa,
  ukraine,
  { name: "Poland", population: 39000000 },
  { name: "Spain", population: 60000000 },
];

for (var index = 0; index < countries.length; index = index + 1) {
  console.log(countries[index].name);
}

countries[4] = { name: "France" };
console.log("-----------------------------");

for (var index = 0; index < countries.length; index = index + 1) {
  console.log(countries[index].name);
}

function printCountries(countries) {
  for (var index = 0; index < countries.length; index = index + 1) {
    console.log(countries[index].name);
  }
}

printCountries(countries);
console.log("-----------------------------");
printCountries([]);

// arrays syntax JSON
// ["2",2,true,wagon,undefined, (3 + 5)]
// for loops array

// what is a method, object method
/**
 * 1. Method is function
 * 2. method - is function which is property of an object/array
 */

var someFunctionOutside = function () {
  console.log("test2");
};

function someFunctionOutside2() {
  console.log("test3");
}

var personFake = {
  name: "Test",
  lastName: "Test2",
  printTest: function () {
    console.log("test");
  },
  printTest2: someFunctionOutside,
  printTest3: someFunctionOutside2,
};

personFake.printTest();
personFake["printTest2"]();
personFake.printTest3();

var car = {
  // 0x008802
  model: "Test",
  drive: function () {},
  stop: function () {},
};
// how to create method for object
car.model = "Test2"; // car -> 0x008802
car.drive = undefined;
car.driveSnow = function () {
  console.log("Wow, it's snow now :)");
};

// {}

// what is a builtin method? toString()
var emptyObject = { a: "3", f: function () {} };
console.log(emptyObject.toString()); // var console = {log: function() {}}; Browser API
console.log("-----------below array.toString() output -----------");
console.log([2, 3, 4, 5].toString()); // "2,3,4,5"
// console.log = undefined;
// primitives methods, how is that possible? autopacking
console.log((2.23523632).toFixed(2));
console.log("some very long text about some weird story".includes("about2"));
console.log(
  "     \n     some very long text about some weird story          ".trim()
);
console.log(
  "      \n     some very long text about some weird story          "
);
console.log(true.toString());
console.log(false.toString());
// string, boolean, number
// string methods: .trim(), .includes()
// number methods: .toFixed()

// array methods:
console.log("-----------below array multiple methods output -----------");
var arrayWithSomeNumbers = [1, 2, 3, 4, 5, 6];
// push()
arrayWithSomeNumbers.push(7, 8, 9);
console.log(arrayWithSomeNumbers.toString());
// pop()
arrayWithSomeNumbers.pop();
console.log(arrayWithSomeNumbers.toString());
arrayWithSomeNumbers.pop();
console.log(arrayWithSomeNumbers.toString());
arrayWithSomeNumbers.pop();
console.log(arrayWithSomeNumbers.toString());
// shift()
// unshift()

var printer = function () {
  console.log("TEST");
}; //function
var usesPrint = function (arg) {
  arg(); // function() {} // printer()
};

// usesPrint("2");
// usesPrint(1);
// usesPrint(true);
usesPrint(function () {});
usesPrint(printer);

// forEach() - note about 1-class functions
console.log("-----------below array forEach methods output -----------");
var handleItem = function (item) {
  console.log("The number is: " + item);
};
arrayWithSomeNumbers.forEach(handleItem);
// map()
var handleSquareItem = function (item) {
  return item * item;
};
var newArrayWithSquares = arrayWithSomeNumbers.map(handleSquareItem); // var [] // for (i < [].length) { [].push(1) [].push(4) [].push(9) }
console.log(newArrayWithSquares.toString());
console.log(arrayWithSomeNumbers.toString());

var newArrayWithSquares2 = [];
for (var i = 0; i < arrayWithSomeNumbers.length; i++) {
  // newArrayWithSquares2.push(arrayWithSomeNumbers[i] * arrayWithSomeNumbers[i]);
  //
  newArrayWithSquares2.push(handleSquareItem(arrayWithSomeNumbers[i]));
}

/**
 * {
 *     loading: true,
 *     products: [{}]       ===>  <div>loading...<span></span></div>
 * }
 */
console.log(newArrayWithSquares2.toString());
// filter()
var onlyDividableTwoNumbers = [];
for (var i = 0; i < arrayWithSomeNumbers.length; i++) {
  if (arrayWithSomeNumbers[i] % 2 === 0) {
    onlyDividableTwoNumbers.push(arrayWithSomeNumbers[i]);
  }
}
console.log(onlyDividableTwoNumbers.toString());

var onlyDividableTwoNumbers2 = arrayWithSomeNumbers.filter(function (item) {
  return item % 2 === 0;
});
console.log(onlyDividableTwoNumbers2.toString());

// find()
function printCountryDetails(name) {
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].name === name) {
      console.log("Population is " + countries[i].population);
    }
  }
}

printCountryDetails("USA");
printCountryDetails("Ukraine");
printCountryDetails("UK");

function printCountryDetailsWithFind(name) {
  var foundCountry = countries.find(function (item) {
    // element or undefined
    return item.name === name;
  });
  if (foundCountry) {
    console.log("POPULATION IS (via find) " + foundCountry.population);
  }
}

printCountryDetailsWithFind("USA");
printCountryDetailsWithFind("Ukraine");
printCountryDetailsWithFind("UK");

// this keyword
// call, apply, bind, arrow function

/**
 * Homework
 * 1) Create a list of countries with properties (name, region: "Asia", "Europe", "North America", ..., population, etc)
 * 2) Create a list which will contain only countries in Europe and print it into console (.filter(), .forEach() or for loop)
 * 3) Create a list which will contain only names of countries like ("Ukraine", "USA", "Poland", "Germany") (.map())
 * 4) Add countries to the list + print to console
 * 5) Remove some country from the list + print to console
 * 6) Create an object person with properties like (name, surname, age) and create method for this object which will print details of object like( person.printDetails() )
 */
