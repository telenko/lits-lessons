// this keyword
var something = "test";
var printPersonDetails = function () {
  console.log(this.name + ", " + this.lastName + ", " + this.age);
};
var person = {
  name: "Test",
  lastName: "TestLastName",
  age: 29,
  print: printPersonDetails,
  child: {
    name: "TestChild",
    age: 2,
    lastName: "TestLastName",
    print: printPersonDetails,
  },
};
person.print();
person.child.print();
printPersonDetails();
// call, apply, bind, arrow function
// everything is a function
var a = {};
a.toString(); //[Object object]
var func = function (age, anotherArg) {
  console.log(this.someName + ", " + age); //this --> {someName: ''}
};
// console.log(func.toString());//[Function object]
func(23);
var context = { someName: "test" };
func.call(context, 24, "somethibgAnother");
var funcArgs = [24, "somethibgAnother", 2355];
func.apply(context, funcArgs);
var bindedFunc = func.bind(context); //func !== bindedFunc
bindedFunc(2988);
bindedFunc.call({ someName: "test2" }, 32);
var someObjectWithBinded = {
  func: bindedFunc,
};
someObjectWithBinded.func(223);

var printArrow = (a) => {
  console.log("print my details, " + a);
}; //var printArrow = function() {console.log("")}
printArrow(2);

[1, 2, 3, 4].filter((numb) => numb % 2 === 0); //numb => { return numb % 2 === 0 }
var person2Object = {
  name: "Test",
  print: function () {
    console.log("PRINT " + this.name);
    var printArrowInsidePrint = () => {
      console.log("PRINT ARROW INSIDE" + this.name);
    };
    printArrowInsidePrint();
  },
  printArrow: () => {
    console.log("PRINT " + this.name);
  },
};

person2Object.print();
person2Object.printArrow();

// let and const --> ES6 2016
var some = "23";
let someAnotherVar = "234";
const someAnotherVar3 = {
  header: "Online market",
};
// someAnotherVar3 = 2467;
// console.log(someAnotherVar3)

// const doSomething2WithConst = function() {

// }
// doSomething2WithConst = null;
// doSomething2WithConst();
///

var someVar = "34"; //window.someVar = '34';
//someVar; //window.someVar;
var some24236 = '34'
function varFunc(arg) {
  let some24235 = "35";
  //var i = 0;
  //var i = 0;
  let ii = 0;
  const name = "andrii";
  for (var i = 0; i < 5; i++) {
    let c = 0;
    console.log(some24235);
    console.log(some24236);
    const someVarInsideLoop = "34";
    //i = i + 1;
    var some;
  }
  c;
  for (var i = 0; i < 5; i++) {
    //i = i + 1;
  }
  if (someCondition) {
    let c = 2;
    some = 23;
  } else {
  }
}

// 1st functions map, filter
// let const apply bind call, arrow functions (mdn)
// DOM (mdn)