console.log("DOM Learning");

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

div.style.backgroundColor = "green";
div.style.color = "red";
div.style.fontSize = "30px";

// div.setAttribute("id", "newId123");
// let newId = div.getAttribute("id");
// console.log(`new id is - ${newId}`);

// Add new button in html in DOM

let newBtn = document.createElement("button");
newBtn.innerText = "Login"; 

// add this button inside the button at the end

let divObj = document.querySelector("div");
// divObj.append(newBtn); //to add at last of node (inside)
 divObj.prepend(newBtn); //to add at start of node(inside)
// divObj.before(newBtn); // add before the node (outside)
// divObj.after(newBtn); // add after the node (outside)
// divObj.remove(); // delete the node 


// ADD NEW HEADING --

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>"
document.querySelector("body").prepend(newHeading);
