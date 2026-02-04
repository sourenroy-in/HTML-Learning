let arr = [10, 20, 30, 50, 70, 0];

let lnum = 0;

for(let i = 0; i<=arr.length; i++) {
    if(lnum < arr[i]) {
        lnum = arr[i];
    }
}

console.log(lnum);