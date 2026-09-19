/* 
Create an array to store companies.

a. remove the first company from the array.

b. remove uber and add ola in its place.

c. Add amazon at the end.

*/

let companies = ["Boomberge", "Microsoft", "Uber", "Google" , "IBM", "Netflix"];

// a. remove the first company from the array.
companies.shift();
console.log(companies); // ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

// b. remove uber and add ola in its place.

companies.splice(1, 1, "OLA");
console.log(companies); // ['Microsoft', 'OLA', 'Google', 'IBM', 'Netflix']

// C. Add amazon at the end

companies.push("amazon");
console.log(companies); // ['Microsoft', 'OLA', 'Google', 'IBM', 'Netflix', 'amazon']