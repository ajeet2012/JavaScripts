// Synchronous 

console.log("First Line");
console.log("Second Line");
console.log("Third Line");

// Asynchronous

function Hello() {
    console.log("hello");
}

setTimeout(Hello, 2000); // hello will print after 2 seconds

console.log("Fourth line");


// callBacks 

function sum(a, b) {
    console.log(a+b);
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b);
}

calculator(23, 12, sum);

const myCallback = () => {
    console.log("My callback");
}

setTimeout(myCallback, 4000);

// Promise

// Promise Syntax
let promise = new Promise((resolve, reject) => {

    console.log('I am a promise');
    reject("Some error");

})

// Real life promise use example

function getData(userId, getNextData){

    return new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("data", userId);
         resolve("Success");
         if (getNextData) {        
            getNextData();         
        }
       }, 2000); 
    })
} 

let promise2 = getData(23, getData)
promise2.then((result)=>{
     console.log("Promise fullfilled");
});

promise2.catch((error) => {
console.log(error)
});