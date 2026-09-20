//alert("Hello World");
console.dir(document.body);
console.log(document.body);
console.log(document.body.childNodes[0]);

let header = document.getElementById("heading");
 console.log(header);
 console.dir(header);

 // access element using class from html

 let elements = document.getElementsByClassName("heading-class");
 console.log(elements);
 console.dir(elements);

 // access element using tags

 let elementsUsingTag = document.getElementsByTagName("p");
 console.dir(elementsUsingTag);

 // access element using query selector
 console.log("Element using query selector");
//Use . operator when we use class as parameter
 let firstEle = document.querySelector(".heading-class"); // Here we can pass id, class or tag
 console.dir(firstEle);
// Use # when we use id as parameter
  let firstEleById = document.querySelector("#heading"); // Here we can pass id, class or tag
 console.dir(firstEleById);
 
 let allEle = document.querySelectorAll("p"); // Here we can pass id, class or tag
 console.dir(allEle);
 