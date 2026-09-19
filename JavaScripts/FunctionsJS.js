// Functions ----
function printMyMessage(message, n){
    console.log(message, n);
    console.log(message * n); // NaN
}
printMyMessage("Hello bro.. kya maje chal rahe h.. :)", 22);

function sumOfTwoNumbers(x, y) {
    x = 44;
    y = 55;
    return x + y;
}
console.log(sumOfTwoNumbers(34, 45)); // 99

// Arrow function ----

/*

const functionName = (param1, param2, ..) => {
    
// add some work here
    
}

*/

const sum = (a, b) => {
    return (a + b);
}

console.log(sum(23, 44)); // 67
