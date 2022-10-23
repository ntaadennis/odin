//const prompt = require('prompt-sync')();

let playerScore = 0
let computerScore = 0
let playerWin = false
let computerWin = false
let draw = false

const showPlayer = document.querySelector('#user');
const showComputer = document.querySelector('#computer');
const showResult = document.querySelector('#result');
const showScorePlayer = document.querySelector('#playerScore');
const showScoreComp = document.querySelector('#computerScore')
const finish = document.querySelector('#finish');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let rnd = getRandomInt(3) + 1;
    if (rnd === 1) {
        return "Paper"
    }
    else if (rnd === 2) {
        return "Rock"
    }
    else {
        return "Scissors"
    }
}

function fightResult(user, computer) {
    if (user != "") {
        if (user == computer) {
            draw = true
            showResult.textContent = "It's a draw!"
            console.log("It's a draw!");
        }
        else if (user == "Rock") {
            if (computer == "Scissors") {
                console.log("You won! Pog");
                playerWin = true
                showResult.textContent = "You won! Pog"
                return "You won! Pog"
            }
            else {
                console.log("You lost! Sadge")
                computerWin = true
                showResult.textContent = "You lost! Sadge"
                return "You lost! Sadge"
            }
        }
        else if (user == "Paper") {
            if (computer == "Rock") {
                console.log("You won! Pog");
                playerWin = true
                showResult.textContent = "You won! Pog"
                return "You won! Pog"
            }
            else {
                console.log("You lost! Sadge")
                computerWin = true
                showResult.textContent = "You lost! Sadge"
                return "You lost! Sadge"
            }
        }
        else {
            if (computer == "Paper") {
                console.log("You won! Pog");
                playerWin = true
                showResult.textContent = "You won! Pog"
                return "You won! Pog"
            }
            else {
                console.log("You lost! Sadge")
                computerWin = true
                showResult.textContent = "You lost! Sadge"
                return "You lost! Sadge"
            }
        }
    }
    else {
        console.log("Please enter a real answer")
        play()
    }
}

function insensitiveAnswer(input) {
    if (input != null) {
        input = input.toLowerCase()
        return input.charAt(0).toUpperCase() + input.slice(1)
    }
    else {

    }
}

function play(button) {
    finish.textContent = "";

    draw = false;
    playerWin = false;
    computerWin = false;
    let user = button;
    let computer = "";
    computer = computerPlay();


    console.log(user);
    showPlayer.textContent = user;

    console.log("vs");

    console.log(computer)
    showComputer.textContent = computer;

    console.log("")

    fightResult(user, computer)

}

function score() {
    if (playerWin && computerWin) {
        playerScore++;
        computerScore++;
    }
    else if (playerWin) {
        playerScore++
    }
    else if (computerWin) {
        computerScore++
    }
    showScorePlayer.textContent = playerScore;
    showScoreComp.textContent = computerScore;

    if (playerScore >= 5) {
        finish.textContent = "The game is over! You win!";
        resetScore();
    }
    if (computerScore >= 5) {
        finish.textContent = "The game is over! The computer won.";
        resetScore();
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function odinGame(button) {
    play(button);
    score();


}

function game(button) {
    for (let i = 0; i <= 5; i++) {
        if (draw) { i-- }
        if (playerScore == 3 && computerScore !== 3 || computerScore == 3 && playerScore !== 3) { break }
        play(button)
        score()
        console.log("")
        console.log("Your score: " + playerScore)
        showScorePlayer.textContent = playerScore;

        console.log("Opponents score: " + computerScore)
        showScoreComp.textContent = computerScore;
        console.log("")
    }
    if (playerScore > computerScore) {
        console.log("The game is over! You win!")
        console.log("")
        finish.textContent("The game is over! You win!")
    }
    else {
        console.log("The game is over! The computer won.")
        console.log("")
        finish.textContent("The game is over! The computer won.")

    }
}

const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        odinGame(e.target.textContent);
    });
}