// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Square = arr.map((num) => num*num);
console.log(Square);

let sum = Square.reduce((acc,cur) => acc + cur, 0);
console.log("The sum is:",sum);

let average = sum/arr.length;
console.log("The average of Numbers:",average);


// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5

let nums = [2, 4, 6, 8, 10];
let n = nums.map((n) => n+5);
console.log(n);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array

let str = "souren";
console.log(str.toUpperCase());

let array = ["ironman", "spiderman", "goblin", "thor"];
console.log(array.map((array) => array.toUpperCase()));

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((el) => el*2),
];

console.log(doubleAndReturnArgs([2, 4], 6));
console.log(doubleAndReturnArgs([10], 7, 8)); //First take the arr, second take the others ...arguments

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.


const mergeObjects = (obj1, obj2, obj3) => ({...obj1, ...obj2, ...obj3});
console.log(mergeObjects({a: 1, b: 2, c: 3},{x: 10, y: 9, z: 8},{i:4, j: 5, k: 6}));
