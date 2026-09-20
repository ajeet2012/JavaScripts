// Problem - 1

console.log("Create a new button(\"Click me\") element, background color of red & text color of white. Insert the button as the first element inside the body tag")

let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.color = "white";
newButton.style.backgroundColor = "red";

let body = document.querySelector("body");
body.prepend(newButton);

// Problem 2 - 
let para = document.querySelector("p");
console.log(para)
//para.setAttribute("class", "newClass"); // override
para.classList.add("newClass") // add new class so that both style will work on css