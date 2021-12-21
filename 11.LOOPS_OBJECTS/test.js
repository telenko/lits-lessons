// loops: for (run 3 times smthing user name + i), while
for (var i = 0; i < 5; i++) {
  console.log("Test value: " + i);

  //i = i + 1 --> 5
}

console.log("loop finished");

var k = 0;

while (k < 5) {
  console.log("Test value for while : " + k);
  k = ++k;
}

var z = 0;
z = ++z; // z + 1
z = z + 1;
z = z++;
(z = z), z + 1;

z = --z;
console.log(z);

console.log("loop while finished");

// if (true) else {}

// recursion - loop numbers from 10 to 0
var printNumber = function (n) {
  console.log("Test number from recursion: " + n);
  if (n < 5) {
    printNumber(n + 1);
  }
};
printNumber(0);

// objects - why need for them
// var userNameWhichHasLoggedIn = "";
// var firstNameForCreatingAnOrder = "Andrii";
// var lastName = "Telenko";
// var age = 28;
// console.log(firstName, lastName, age);

// var car = {}; ///

// console.log(car.showMyDetails());
// console.log(car.showMyPrice()); // $
// car.drive();
// car.stop();
// car.break();
// car.model;
// car.age;
// car.kpp;

// 1. modeling entities from a real world
// 2. combining/grouping multiple properties together, so easier to find them

// objects - base syntax ( = {}), JSON {prop1: value1, prop2: value2, prop3: {prop3Prop1: prop3Value1}}

// JSON mdn , w3c

var personWithOrder = {
  age: 28,
  name: "Andrii",
  lastName: "Telenko",
  country: "Ukraine",
  hasJob: true,
  hasChildren: true,
  parent: {
    age: 55,
    name: "Test",
    lastName: "Test",
    country: "Ukraine",
    hasJob: true,
    hasChildren: true,
  },
  test: {
    some: "BBBB",
  },
};

var personLoggedIn = {
  age: 35,
  name: "Some",
  lastName: "Test",
  country: "Ukraine",
  hasJob: false,
  hasChildren: false,
};

// DOM
console.log(typeof personWithOrder);

// typeof for objects (note about null)
// modelling JSON object for product of market
var productTV = {
  mark: "Test",
  model: "Some model L6",
  price: 12334,
  amount: 20,
  dimensions: {
    width: 100,
    height: 50,
  },
  type: "LCD",
};

console.log("IS Mark equal to test: " + (productTV.mark === "Test"));

// objects basic operations (read, mutate)
// objects read a property syntax, deep read
console.log(productTV.mark);
console.log(productTV.dimensions.width);

console.log(productTV["mark"]);
console.log(productTV["dimensions"].width);
console.log(productTV["dimensions"]["width"]);
console.log(productTV["dimensions"]["0-++____7723"]);

// objects values mutate syntax, deep write
productTV.price = 13000;
console.log(productTV.price);
productTV.dimensions.width = 150;
console.log(productTV.dimensions.width);

productTV.dimensions = {
  width: 50,
  height: 10,
};

console.log(typeof productTV.mark);
console.log(typeof productTV.dimensions);

// note about equal objects, and after mutation
console.log(22 === 22);
console.log("test" === "test");
console.log(5 < 3);

var obj1 = { a: 3 };
var obj2 = { a: 3 };
console.log(obj1 === obj2);

var obj3 = obj1;

obj1.a = 4;

console.log(obj3 === obj1);

obj2 = obj1;
console.log(obj1 === obj2); //(object, object)// '22' === 22 (string number => false)
console.log(obj1 == obj2); //objectLink1 equal objectLink2  // '22' == 22

// === vs == ==> "22" == 22 (true) ,  "22" === 22 (false)

function test(n) {
  // var n = 1
  n = 1234;
  console.log("n", n);
}

var fakeNumber = 1;
test(fakeNumber);
console.log(fakeNumber);

function testObject(obj) {
  obj.name = "fake";
}
var obj = { name: "test" };
testObject(obj);
console.log(obj.name);

// arrays - why need for them ? what is a list?
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // {}

// array versus object
var object = {
  0: "test0",
  1: "test1",
};

var array = ["test0", "test1"];

array[0];

array[1];

array[2];

obj[0];

obj["0"];

object[0];

array.length;

array[0] = "test23iy2357235";
console.log(array[0]);
console.log(typeof array);
console.log(typeof array[0]);

var products = [
  {
    mark: "Test",
    model: "Some model L6",
    price: 12334,
    amount: 20,
    dimensions: {
      width: 100,
      height: 50,
    },
    type: "LCD",
    tags: ["телевізор", "LCD"],
  },
  {
    mark: "Test",
    model: "Some model L6",
    price: 12334,
    amount: 20,
    dimensions: {
      width: 100,
      height: 50,
    },
    type: "LCD",
  },
];
var products = [
  ["Test", "Some model L6", 12234],
  ["Test", "Some model L6", 12234],
  ["Test", "Some model L6", 12234],
];

console.log(products[0].mark);
console.log(typeof products[0].mark);

products[1].mark = "FakeMark";

// homework
/**
 * JSON format (mdn)
 * JSON format array,
 * Read/Mutate create variable with entity (country)
 * Ukraine, USA --> properties , print console
 * create an array with both countries
 * **** loop through countries list and print details of each country to console (Name = Ukraine, independentFrom = 1991, )
 */

// arrays syntax JSON
// for loops array
// array and object comparison

// what is a method, object method
// how to create method for object
// what is a builtin method? toString()

// primitives methods, how is that possible? autopacking
// string methods: .trim(), .includes()
// number methods: .toFixed()

// array methods:
// forEach() - note about 1-class functions
// map()
// filter()
// find()
