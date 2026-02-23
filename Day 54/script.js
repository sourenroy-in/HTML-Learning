// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.


// i) a with red text that says "Hey I'm red!"
let para1 = document.createElement('p');
para1.innerText = "Hey I'm Red!"

document.querySelector('body').append(para1);
para1.classList.add('red');

// ii) an <h3> with blue text that says "I'm a blue h3!"
let head3 = document.createElement('h3');
head3.innerHTML = "I'm a blue h3";

document.querySelector('body').append(head3);
head3.classList.add('blue');

// iii) a with a black border and pink background color with the following elements inside of it:
// • another <hl> that says "I'm in a div"
// • that says "ME TOO!

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a DIV";
para2.innerText = "Me Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").prepend(div);
