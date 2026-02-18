let arr = [1, 2, 10, 5, 7, 9, 6, -15];

let max = 0;

for(let i=0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}

console.log(max);

// Max & Min using Reduce method
let ans1 = arr.reduce((max,el) => {
    if (max < el){
        return el;
    } else {
        return max;
    }
});
console.log(ans1);



let min = arr.reduce((min,el) => {
    if(min < el){
        return min;
    } else {
        return el;
    }
});

console.log(min);


// Check all numbers in our array are multiples of 10 or not 
let nums = [10, 20, 30, 40];

let answer = nums.every((el) => el%10 == 0)
console.log(answer);

// create a function to find the min number in an Array

