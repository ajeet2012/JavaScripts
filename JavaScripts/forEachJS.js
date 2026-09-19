// forEach() is an array method used to execute a function once for each element in an array.

console.log("forEach()");
/*

syntax:

array.forEach(function(element, index, array) {

    // code

});

*/

const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {

    console.log(fruit);

});

fruits.forEach( (fruit, index) => {

    console.log(`${index} - ${fruit}`);

});

fruits.forEach( (fruit, index, arr) => {

    console.log(`${index} - ${fruit}`);
    console.log(`array - ${arr}`);

});

// Callback : 

function greet(name) {

    console.log("Hello " + name);

}

function processUser(callback) {

    callback("Ajeet");

}

processUser(greet);