/*
Object in JS : 

A  Java script object is an entity having state and behavior (properties and method).

In JavaScript, an object is a collection of related data stored as key–value pairs.


*/

const student = {
    fullName: "ajeet sharma",
    age: 39,
    marks: 90.4,

    printMarks: function() {
        console.log(`Marks - ${this.marks}`)
    },
}

console.log(student.printMarks()); // Marks - 90.4

let arrCities = ["mumbai", "delhi", "kolkata"];

const employee = {
    salary: "200000 per month",

    calculateTax(){
        console.log("10% tak on ");
    },

    calculateTax2 : function() {
        console.log(`This is also way to create function in object`);
    }
}


const company = {
    name: "TCS",
    employees: 10000000
}

company.__proto__ = employee;

