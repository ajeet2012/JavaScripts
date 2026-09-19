// Array --------

let employeeName = ["ajeet", 39];
console.log(employeeName);  // Output:  [`ajeet`, 34]

for(let obj of employeeName){
    console.log(obj);
} 
/* 
Output: 
  
  ajeet
  39
*/

console.log(employeeName[2]); // undefined

// Problem - 1 ----------
console.log("For a given array marks of students. Find the average marks of the entire class.");

let marks = [85, 97, 45, 88, 90, 60];
let totalMarks = 0
for(let mark of marks){
   totalMarks += mark;
}
console.log(`Average marks of the class ${totalMarks/(marks.length)}`);
// Average marks of the class 77.5

// Problem - 2 -----------

console.log("For a given array with prices of 5 items.  All items have an offer of 10% OFF on them. Change the array to store the final price after applying the offer.");
let items = [250, 356, 658, 952, 1245];
let index = 0
for(let value of items){

    console.log(`value at index[${index}] is ${value }`);
    let offer = value/10;
    items[index] -=  offer;
    index++;
}
console.log("After discounts - ", items); // [225, 320.4, 592.2, 856.8, 1120.5]
