var printData = function () {
  var firstName;
  var lastName;
  var age;

  //  ----
  firstName = "Andrii";
  lastName = "Telenko";
  age = 28; // "28";

  console.log("Name=" + firstName + ", LastName=" + lastName + ", Age=" + age);
  //
  firstName = "Test";
  lastName = "Test";
  age = 124; // "28";

  console.log("Name=" + firstName + ", LastName=" + lastName + ", Age=" + age);

  console.log(typeof firstName);
  console.log(typeof lastName);
  console.log(typeof age);

  age = "Age is: " + age; // 28 -> "28"
  console.log(age);
  console.log(typeof age);
};

printData();
printData();
printData();
printData();
printData();
printData();
printData();
printData();
printData();
printData();
