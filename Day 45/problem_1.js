let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let n = 7;

function getElements(arr,n) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n){
            console.log(arr[i]);
        }
    }
}

getElements(arr,n);


