//Problem - Create a h2 heading element with text - "Hello JavaScript!". Append " from SVITS College" to this text in JS.
console.log("Problem - Create a h2 heading element with text - \"Hello JavaScript!\". Append \" from SVITS College\" to this text in JS.")
let h2 = document.querySelector("h2");
console.dir(h2);
h2.innerText = h2.innerText + " from SVITS College";

//Problem - Create 3 divs with common class name "box". Access them and add some unique in all of them.

console.log("Problem - Create 3 divs with common class name \"box\". Access them and add some unique in all of them.")
let divs = document.querySelectorAll(".box");
console.dir(divs);
divs.forEach((element, index)=> {
    element.innerText = `new unique value ${index + 1}`
});
