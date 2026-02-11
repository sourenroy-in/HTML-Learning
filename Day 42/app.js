const max = prompt("Enter the MAX number: ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while (true) {
    if (guess == "quit") {
        console.log("Game Quit");
        break;
    }

    if (guess == random) {
        console.log("Congrats!! , You are Right !!");
        break;
    } else if (guess < random) {
        guess = prompt("HINT: pLease try Higher Number !!");
    } else if (guess > random) {
        guess = prompt("HINT:pLease try Lower Number !!");

    } else {
        guess = prompt("Wrong Guess, Please Try Again !!");
    }
}
