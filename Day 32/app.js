// Problem 1 

// using shift/unshift method

let month = ['Jan', 'feb', 'march', 'apr'];

month.shift();
month.shift();

month.unshift('july');
month.unshift('june');

// Using splice method  add, remove, replace

month.splice(0, 2, 'july' , 'june');

let lang = ['c', 'c++', 'html','python', 'js', 'css', 'sql', 'c#'];
lang.indexOf('js');
lang.reverse().indexOf('js');



let arr = [4, 6, 7, 9, 2, 0, -2, 4];
let n = 3;

// Qs 1> to get the First n elements
let s = arr.slice(0,n);
console.log(s);

// Qs 2> to get the Last n elements
let sol = arr.slice(arr.length - n);
console.log(sol);

// Qs3 > check whether a string is blank or not.
let txt = prompt("Enter a String: ");

if (txt.length == 0) {
    console.warn("This String is EMPTY");
} else {
    console.log("This String is NOT EMPTY");
}

// Qs 4> test whether the character at the given (character)index is lower case.

let str = "aPnaCollege";
let idx = 3;

if(str[idx] == str[idx].toLowerCase()) {
    console.log("The string in LowerCase");
} else {
    console.log("This is not in lowerCase");
}

// Qs 5> strip leading and trailing spaces from a string

let x = prompt("Enter a string");
console.log(`Original string is ${x}`);
console.log(`The trimmed string is ${x.trim()}`);

// Qs 6>  check if an element exists in an array or not

let ar = ['1', '10', '76' , 'souren', 'roy', '50.33', '14.00'];

let find = prompt("Enter the element you want to search in array: ");

if(ar.indexOf(find) != -1) {
    console.log(`The Element is in Array at index : ${ar.indexOf(find)}`);
} else {
    console.log("Element is not availvel");
}