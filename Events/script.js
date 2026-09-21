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
console.dir(div)
div.onmouseover = (event) => {
    console.log("Mouse over on new div");
    console.log(event.clientX, event.clientY); // 124 130
};