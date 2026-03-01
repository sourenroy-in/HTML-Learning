// M1
h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);

}
changeColor(" red",1000, ()=> {
    changeColor("orange", 1000, ()=> {
        changeColor("green", 1000, ()=> {
            changeColor("blue",1000);
        });
    });
});

// using Promises

h2 = document.querySelector("h2");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            h2.style.color = color;
            resolve("color Changed");
        }, delay);
    });
} 

changeColor("red", 1000)
.then(()=> {
    console.log("red color was complete");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("purple", 1000);
})
.then (() => {
    console.log("purple Color was completed");
    return changeColor("pink", 1000);
})

.catch (() => {
    console.log("color change Failed");
});