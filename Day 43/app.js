// Problem  1 Create a program that generates a random number representing a dice roll !

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// Problem 2 Create an object representing a car that stores the following properties for the car:name,model,color !

let car = {
    name: "Suzuki",
    model: "Dezire",
    color: "White",
};

console.log(car);

// Problem 3 Create an object Person with their name,age and city.
// Edit their city’s original value to change it to “NewYork” 

const Person = {
    name: "Souren",
    age:"21",
    city:"Kolkata",
}

console.log(Person);
// After Change 
Person.city = "New York";
Person.country = "USA";
console.log(Person);

// Problem 4 Create a function to Roll dice !!

function RollDice () {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

RollDice();

// Problem 5 Create a function to give us average of three Numbers.

function calcAvg(a,b,c) {
    let average = ((a+b+c)/3);
    console.log(average);
}

calcAvg(30,70, 80);

// Problem 6 Create a function that print ths Multiplication Table !

function PrintTable(n) {
    for(let i = n; i<n*21; i+=n){
        console.log(i);
    }
}

PrintTable(5);

// Problem 7 Create a Function that return the sum of number from 1 to n 

function CalcSum(n) {
    let sum = 0;

    for(let i = 1; i<=n; i++){
        sum+=i;
    }
    return sum;
}

console.log(CalcSum(1050));
