// Problem 1 Write a Arrow function to that returns square of a number "n";

const square = (num) => num * num ;

console.log(square(5));

// Problem 2 Write a function that prints "Hello World" at intervals of 2s each

let id = setInterval(() => {
    console.log("Hello World !");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval Ran");
},10000);