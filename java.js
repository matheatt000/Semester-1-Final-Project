var rButton = document.getElementById("rock");
var pButton = document.getElementById("paper");
var sButton = document.getElementById("scissors");

rButton.addEventListener("click", function(){
    runRPSGame("rock");
});
pButton.addEventListener("click", function(){
    runRPSGame("paper");
});
sButton.addEventListener("click", function(){
    runRPSGame("scissors");
});
function comInput(){
    var options = ["rock", "paper", "scissors"];
    var result = options[Math.floor(Math.random() * 3)];
    return(result);
}
var wins = 0;
document.getElementById("wins").textContent = "Wins: " + wins;
var losses = 0;
document.getElementById("losses").textContent = "Losses: " + losses;
var ties = 0;
document.getElementById("ties").textContent = "Ties: " + ties;
function runRPSGame(userInput){
    var computerInput = comInput();
    if(userInput == "rock" && computerInput == "scissors"){
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "You win!";
        wins = wins + 1;
        document.getElementById("wins").textContent = "Wins: " + wins;
    }else if(userInput == "rock" && computerInput == "paper"){
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "You Lose!";
        losses = losses + 1;
        document.getElementById("losses").textContent = "Losses: " + losses;
    }else if(userInput == "paper" && computerInput == "rock"){
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "You win!";
        wins = wins + 1;
        document.getElementById("wins").textContent = "Wins: " + wins;
    }else if(userInput == "paper" && computerInput == "scissors"){
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "You Lose!";
        losses = losses + 1;
        document.getElementById("losses").textContent = "Losses: " + losses;
    }else if(userInput == "scissors" && computerInput == "paper"){
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "You win!";
        wins = wins + 1;
        document.getElementById("wins").textContent = "Wins: " + wins;
    }else if(userInput == "scissors" && computerInput == "rock"){
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "You Lose!";
        losses = losses + 1;
        document.getElementById("losses").textContent = "Losses: " + losses;
    }else{
        document.getElementById("player").textContent = "Player chose: " + userInput;
        document.getElementById("computer").textContent = "Computer chose: " + computerInput;
        document.getElementById("winner").textContent = "It's a Tie!";
        ties = ties + 1;
        document.getElementById("ties").textContent = "Ties: " + ties;
    }
}

function highlight(element) {
    element.style.backgroundColor = "rgba(177, 136, 243, 1)";
}