const favMovie = "roy";

let guess = prompt("Enter my Fav Movie");

while ((guess != favMovie)) {
    if (guess == "quite") {
        console.log("You QUITE");
        break;
    }
    guess = prompt("Wrong Guess ,Please Try again: ");
    console.warn("You chose Wrong movie");
}

if (guess == favMovie) {
    console.log("Congrats !! You Chose right");
}