const prompt = require('prompt-sync')();

let playerScore = 0
let computerScore = 0
let playerWin = false
let computerWin = false
let draw = false

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
            console.log("It's a draw!");
        }
        else if (user == "Rock") {
            if (computer == "Scissors") {
                console.log("You won! Pog");
                playerWin = true
                return "You won! Pog"
            }
            else {
                console.log("You lost! Sadge")
                computerWin = true
                return "You lost! Sadge"
            }
        }
        else if (user == "Paper") {
            if (computer == "Rock") {
                console.log("You won! Pog");
                playerWin = true
                return "You won! Pog"
            }
            else {
                console.log("You lost! Sadge")
                computerWin = true
                return "You lost! Sadge"
            }
        }
        else {
            if (computer == "Paper") {
                console.log("You won! Pog");
                playerWin = true
                return "You won! Pog"
            }
            else {
                console.log("You lost! Sadge")
                computerWin = true
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

function play() {
    draw = false;
    playerWin = false;
    computerWin = false;
    let user = prompt("Choose one: Rock, Paper or Scissors: ");
    user = insensitiveAnswer(user);
    let computer = "";
    computer = computerPlay();

    console.clear()

    console.log(user);
    console.log("vs");
    console.log(computer)
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
}

function game() {
    for (let i = 0; i <= 5; i++) {
        if (draw) { i-- }
        if (playerScore == 3 && computerScore !== 3 || computerScore == 3 && playerScore !== 3) { break }
        play()
        score()
        console.log("")
        console.log("Your score: " + playerScore)
        console.log("Opponents score: " + computerScore)
        console.log("")
    }
    if (playerScore > computerScore) {
        console.log("The game is over! You win!")
        console.log("")
    }
    else {
        console.log("The game is over! The computer won.")
        console.log("")
    }
}

console.clear();
game();