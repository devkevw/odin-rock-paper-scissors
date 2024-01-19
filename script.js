const HANDS = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // get random integer from 
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

// function game() {
//     for (let i = 0; i <5 ; i++) {
//         let playerSelection = prompt("Please enter your hand:"); 
//         // ignore input validation for now
//         let computerSelection = getComputerChoice();
//         // console.log(computerSelection);

//         // play round
//         let result = playRound(playerSelection, computerSelection);
//         let resultArray = result.split(" ");
//         // console.log(resultArray);

//         if (resultArray[1] === "win!") {
//             playerScore++;
//         } else if (resultArray[1] === "lose!") {
//             computerScore++;
//         }
//         alert(result + "\nThe current score is:\nPlayer: " + playerScore
//          + "\nComputer: " + computerScore);
//     }

//     if (playerScore > computerScore) {alert("You win!")}
//     else if (playerScore < computerScore) {alert("You lose!")}
//     else {alert("It's a tie!")}
// }







