var numberToGuess = Math.floor(Math.random() * 100) + 1;
playAgain.style.display = "none";
startGuess.addEventListener("click", function(){
    runguessGame(numberToGuess);
});
var guess = 0;
function runguessGame(numberToGuess){
    var userGuess = prompt("Guess a number between 1 and 100:");
    while (true){
        if(userGuess == null){
            break;
        }   
        if(userGuess < numberToGuess){
            alert("Too low! Try again.");
            guess = guess + 1;
            document.getElementById("guessCount").textContent = "Number of Guesses: " + guess;
            break;
        }else if(userGuess > numberToGuess){
            alert("Too high! Try again.");
            guess = guess + 1;
            document.getElementById("guessCount").textContent = "Number of Guesses: " + guess;
            break;
        }else if(userGuess == numberToGuess){
            alert("Congratulations! You guessed the number " + numberToGuess + " correctly!");
            guess = guess + 1;
            document.getElementById("finalNumber").textContent = "The number was: " + numberToGuess;
            document.getElementById("guessCount").textContent = "Number of Guesses: " + guess;
            startGuess.style.display = "none";
            playAgain.style.display = "inline";

            break;
        }else{
            alert("Invalid input. Please enter a number between 1 and 100.");
            break;
        }
    }
}
