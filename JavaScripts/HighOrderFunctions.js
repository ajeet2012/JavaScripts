// High Order functions ---
console.log("High order functions");

let arr = [12, 23, 34, 5, 6];
// map ----

let mapResult = arr.map((value)=>{
return value
});
console.log(mapResult); // [12, 23, 34, 5, 6]
 
// Double of all elements
console.log(arr.map((val)=>{console.log(val*2)})); // [24, 46, 68, 10, 12]

// filters -----

let multiplyOfTwo = arr.filter((value)=>{
  return value%2 === 0;
});

console.log(multiplyOfTwo);

// reduce ---

let result = arr.reduce((prev, current)=>{
    return prev + current;
});

console.log(result);

// Find the largest number in array --

let largestNumber = arr.reduce((prev, current)=>{
return prev > current ? prev : current
});

console.log(`Largest number in array ${largestNumber}`);

/*

Take a number n as input from user. Create an array of numbers from 1 to n.

Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.


*/

let n = prompt("Enter the number");

let arrInput = []

for(let i = 1; i<=n; i++){
arrInput[i-1] = i;
}
console.log(`array elements - ${arrInput}`);

let sumOfArray = arrInput.reduce((prev, current)=>{
return prev + current;
});

console.log(`sum of all - ${sumOfArray}`);

let factorialOfn = arrInput.reduce((prev, current)=>{
return (prev * current);
});

console.log(`factorial - ${factorialOfn}`);