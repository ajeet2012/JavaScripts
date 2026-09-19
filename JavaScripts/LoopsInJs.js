// for loop ----------------------
console.log("For loop example");

for(i = 1; i <= 5; i++){
    console.log("Hello world!");
    console.log(i);
}

console.log("Sum of n numbers");
let n = prompt("Enter number - ");
let sum = 0;

for (let j = 1; j <= n; j++) {
  sum += j;
}
console.log("sum - ", sum);

// while loop example -------------
console.log("while loop example");

let p = 0;

while(p <= 10){
    console.log("p - ", p);
    p++;
}

// do-while loop ----------------

console.log("do-while loop");
let q = 0
do {
 console.log("q - ", q);
 q++;
}while(q<=5);


// for-of loop --- for iterating string and array -----

console.log("for-of loop");
let str = "ajeetsharma";
console.log(str.length);
for(let val of str){
    console.log("char -", val);
}

// for-in loop ----  for iterating keys of object ------

console.log("for-in loop");
let student = {
    name : "ajeet sharma",
    age : 39,
    city: "Indore",
    mobileNumber: "+919009241741"
}
for(let key in student){
    console.log("key - ", key);
    console.log("value - ", student[key]);
}