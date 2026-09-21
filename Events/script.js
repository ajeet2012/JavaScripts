// Events - 

//Click event - 
let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log("Button 1 was clicked");
    // Here event is event object
    console.log(evt.type); // click
    console.log(evt.target); // <button id="btn1">JS Click Event</button>
    console.log(event.clientX, event.clientY); // 42 19
};

//Onmouseover event - 
let div = document.querySelector("#divJS");
div.onmouseover = (event) => {
    console.log("Mouse over on new div");
    console.log(event.clientX, event.clientY); // 124 130
};

// Event Listners - We can add more than one listner for one element and all will be worked.

let btn2 = document.querySelector("#btn2");
// handler 1
btn2.addEventListener("click", (evt) => {
    console.log("Handle Event Listner");
    console.log(evt.target); // <button id="btn2">Event Listner</button>
});

// handler 2
btn2.addEventListener("click", (evt) => {
console.log("Handle Second Event Listner");
console.log(evt.type); // click
});

// handler 3

let handler3 = (evt) => {
console.log("Handle third Event Listner");
}
btn2.addEventListener("click",handler3);
btn2.removeEventListener("click", handler3);

/*

Problem 1 - Create a toggle button that changes the screen to dark mode
when clicked and light mode with clicked again.

*/

let currentMode = "light";
let body = document.querySelector("body");

let handleThemeEvent = (event) => {
    
if (currentMode == "light") {
   console.log(currentMode);
    currentMode = "dark";
   body.classList.add("dark");
   body.classList.remove("light");
}
else {
    console.log(currentMode);
   currentMode = "light";
   body.classList.add("light");
   body.classList.remove("dark");
}
}
 
let btnTheme = document.querySelector("#btnMode");
btnTheme.addEventListener("click", handleThemeEvent);