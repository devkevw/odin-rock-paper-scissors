const HANDS = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let gameDone = false; 

function getComputerChoice() {
    // get random integer from 0-2
    let randomNum = Math.floor(Math.random() * 3);
    return HANDS[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionClean = playerSelection.trim().toLowerCase();
    let computerSelectionClean = computerSelection.toLowerCase(); 
    if (playerSelectionClean === computerSelectionClean) {
        return "It's a tie! Replay the round."
    } else if (playerSelectionClean === "paper" && computerSelectionClean === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelectionClean === "rock" && computerSelectionClean === "scissors") {
        return "You win! Rock beats scissors."
    } else if (playerSelectionClean === "scissors" && computerSelectionClean === "paper") {
        return "You win! Scissors beats paper."
    } else {
        return "You lose! " + computerSelectionClean[0].toUpperCase() + 
        computerSelectionClean.slice(1) + " beats " + playerSelectionClean + "."
    }
}

// interactions
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const roundResult = document.querySelector(".round-result");
const playerScoreText = document.querySelector(".player-score .number");
const computerScoreText = document.querySelector(".computer-score .number")

function displayPlayerWon() {
    const playAgain = confirm('Congratulations! You won!\nDo you want to play again?');
    if (playAgain) {
        reset();
    } else {
        gameDone = true;
    }
}

function displayComputerWon() {
    const playAgain = confirm('Oh no! You lost to the computer!\nDo you want to play again?');
    if (playAgain) {
        reset();
    } else {
        gameDone = true;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    computerHand.textContent = '';
    playerHand.textContent = '';
    roundResult.textContent = '';
}

function updateScore(result) {
    let resultArray = result.split(" ");
    if (resultArray[1] === "win!") {
        playerScore++;
        console.log(playerScore)

        // change player score display
        playerScoreText.textContent = playerScore;
       
        if (playerScore === 5) {
            setTimeout(function() {
                displayPlayerWon();
            }, 0)
        }
    } else if (resultArray[1] === "lose!") {
        computerScore++;
        console.log(computerScore)

        // change computer score display
        computerScoreText.textContent = computerScore;
       
        if (computerScore === 5) {
            setTimeout(function() {
                displayComputerWon();
            }, 0)
        }
    }
}

// rock
const rockSection = document.querySelector(".rock")
rockSection.addEventListener("click", function () {
    if (!gameDone) {
        const computerSelection = getComputerChoice();
        const resultText = playRound('rock', computerSelection)

        // insert hands
        playerHand.textContent = 'Rock';
        computerHand.textContent = computerSelection;
        roundResult.textContent = resultText;

        // update score and see if there is a winner
        updateScore(resultText);
    }
})

// paper
const paperSection = document.querySelector(".paper")
paperSection.addEventListener("click", function () {
    if (!gameDone){
        const computerSelection = getComputerChoice();
        const resultText = playRound('paper', computerSelection)

        // insert hands
        playerHand.textContent = 'Paper';
        computerHand.textContent = computerSelection;
        roundResult.textContent = resultText;

        // update score and see if there is a winner
        updateScore(resultText);
    }
})

// scissors
const scissorsSection = document.querySelector(".scissors")
scissorsSection.addEventListener("click", function () {
    if (!gameDone) {
        const computerSelection = getComputerChoice();
        const resultText = playRound('scissors', computerSelection)

        // insert hands
        playerHand.textContent = 'Scissors';
        computerHand.textContent = computerSelection;
        roundResult.textContent = resultText;

        // update score and see if there is a winner
        updateScore(resultText);
    }
})







