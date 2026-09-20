const name = "    ajeet sharma    ";
// length - 
console.log(name.length);
// toUpperCase() -
console.log(name.toUpperCase());
// trim() - Remove white spaces from start and end
console.log(name.trim());
console.log(name);
// replace - only first a will be replaced
console.log(name.replace('a', 'b')); // bjeet sharma
// replace all - replace all
console.log(name.replaceAll('a', 'b')); // bjeet shbrmb  
const city = "Indore";
console.log(city.slice(1, 4)); // ndo
console.log(city.slice(1, 40)); // ndore
console.log(city.slice(1)); // ndore
// concate - add two strings
let firstName = "ajeet";
let lastName = "sharma";
let result = firstName.concat(lastName);
console.log(result); // ajeetsharma
// charAt 
console.log(firstName.charAt(3)); // e
console.log(firstName.includes("aj")); // true