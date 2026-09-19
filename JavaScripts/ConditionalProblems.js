alert("Problem 1");

let n = prompt("Enter number");

if (n%5 == 0){

    console.log(n, " is mulitple of 5");

} else {

    console.log(n, " is not mulitple of 5");

}


// Problem 2  - Write a code which can give grades to student according to their scores:
alert("Problem 2");
let score = prompt("Enter your score");

if (score >= 80 && score <= 100){
console.log("Grade A");

} else if (score >= 70 && score <= 89){
console.log("Grade B");

} else if (score >= 60 && score <= 69){
console.log("Grade C");
    
} else if (score >= 50 && score <= 59){
console.log("Grade D");
} else {
console.log("Fail");
}

