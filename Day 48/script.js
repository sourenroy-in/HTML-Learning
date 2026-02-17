// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

const arrayAverage = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));


// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not

let num = 4;

const isEven = (n) => n % 2 == 0;

console.log(isEven(4));

// Qs3
const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);


// Qs4
let length = 4;
function callback() {
    console.log(this.length);
}
const object2 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object2.method(callback, 1, 2);
