let start = 1;
let end = 100;

function getRandom (start, end) {
    let diff = end - start;
    return Math.floor((Math.random()) * diff) + start;
}