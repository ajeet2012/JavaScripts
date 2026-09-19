let firstName = "ajeet";
let lastName = 'Sharma';
let fullName = firstName + " " + lastName;

console.log(firstName + " " + lastName);
console.log("full name - ", fullName);
console.log("fullName length - ", fullName.length);
console.log("fullName[1] - ", fullName[1]);

// Template literals --

let employee = {
    fullName : "ajeet sharma",
    age : 39,
    designation : "SSE",
    address: "Duabi"
};

let introResult = `Employee name is '${employee.fullName}' and he/she is ${employee.age} years old.`;
console.log(introResult); // Employee name is 'ajeet sharma' and he/she is 39 years old.
console.log(typeof introResult); // string

let a = 6;
let b = 20;
let c = 33;

let sum = `sum of a, b and c is = ${a + b + c}`;
console.log(sum);

// Escape characters 

let name = "ajeet\tSharma";
console.log(name); //ajeet	Sharma
console.log(name.length); // 12 - '\t is one character'
console.log(name.toUpperCase());