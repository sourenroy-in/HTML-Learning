// Qs1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click Me!";

document.querySelector("body").append(button);
document.querySelector("body").append(input);

// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn"

button.setAttribute("id","btn");
input.setAttribute("placeholder", "username");

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1");

document.querySelector("body").append(h1);

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</>";

document.querySelector("body").append(p);