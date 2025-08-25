let favmovie = "avatar";

let guess = prompt("guess my favorite movie");

while(guess != favmovie )   {
    if(guess == "quite") {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess");
}

if (guess == favmovie) {
    console.log("congrats");
}