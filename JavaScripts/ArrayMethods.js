let list = [12, 23, 34, 45, 56];
// Push
list.push(44);
console.log("after push operation ",list);
// Pop
list.pop()
console.log("after pop operation",list);

// toString
console.log("toString() - ", list.toString());
console.log("toString() - ", typeof list.toString());

// concat

let mpCities = ["Indore", "Bhopal", "Ujjain"];
let mhCities = ["Pune", "Mumbai", "Nashik"];

let mergeCities = mpCities.concat(mhCities);
console.log(mergeCities); // ['Indore', 'Bhopal', 'Ujjain', 'Pune', 'Mumbai', 'Nashik']

// unshift
mpCities.unshift("Dewas");
console.log(mpCities); //  ['Dewas', 'Indore', 'Bhopal', 'Ujjain']

// shift
mhCities.shift();
console.log(mhCities); // ['Mumbai', 'Nashik']

/*

slice() vs splice() in JavaScript

The easiest way to remember:

slice() → copies/extracts part of an array without changing the original.
splice() → adds/removes/replaces items and changes the original array.

*/

// slice
console.log(mergeCities.slice(2, 4)); // ['Ujjain', 'Pune']

console.log(mergeCities.slice(3)); //  ['Pune', 'Mumbai', 'Nashik']

console.log(mergeCities);

// splice 

let testArray = [23, 34, 4, 5, 66, 77, 84];

console.log(testArray.splice(2,2)); // [4, 5] 
console.log(testArray); // [23, 34, 66, 77, 84]
// Index 2. No delete just add 16
testArray.splice(2, 0 , 16);
console.log(testArray); // [23, 34, 16, 66, 77, 84]

testArray.splice(1,3,10);
console.log(testArray); // [23, 10, 77, 84]

let testArray_2 = [1, 2, 3 ,4, 5, 6];
testArray_2.splice(3);
console.log(testArray_2); // [1, 2, 3]