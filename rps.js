function getComputerChoice() {
    let outcome = Math.random();
    if (outcome < 0.33) {
        return "rock";
    }   else if (0.33 <= outcome && outcome < .66) {
        return "paper";
    }   else if (outcome >= 0.66) {
        return "scissors";
    }   else {
        return outcome.valueOf();
    }

}

function getHumanChoice() {
   let choice = prompt("Play Rock, Paper, Scissors with me: ");
   let choiceLowerCase = choice.toLowerCase();
   if (choiceLowerCase === "rock") {
   return "rock";
  } else if (choiceLowerCase === "paper") {
    return "paper";
  } else if (choiceLowerCase === "scissors") {
    return "scissors";
  } else {
    return "Invalid choice";
}
}





function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Let's try again!");
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            console.log('You lose! Paper beats rock.');
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log('You win! Rock beats scissors.');
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            console.log('You win! Paper beats rock.');
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            console.log('You lose! Scissors beat paper.');
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            console.log('You lose! Rock beats scissors.');
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log('You win! Scissors beat paper.');
        }
    }




while (true) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    
    console.log(`You ${humanScore} - ${computerScore} Computer`)
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            console.log('Congratulations! You win!')
        } else if (computerScore === 5) {
            console.log('Oh no, You lost! Better luck next time.')
        }
        break;
    }
}
}
playGame();
