// Qs 6>  check if an element exists in an array or not

let ar = ['1', '10', '76' , 'souren', 'roy', '50.33', '14.00'];

let find = prompt("Enter the element you want to search in array: ");

if(ar.indexOf(find) != -1) {
    console.log(`The Element is in Array at index : ${ar.indexOf(find)}`);
} else {
    console.log("Element is not availvel");
}