function getComputerChoice() {
    let outcome = Math.random();
    if (outcome < 0.33) {
        return "Rock";
    }   else if (0.33 <= outcome && outcome < .66) {
        return "Paper";
    }   else if (outcome >= 0.66) {
        return "Scissors";
    }   else {
        return outcome.valueOf();
    }

}

function getHumanChoice() {
  let choice = prompt("Play Rock, Paper, Scissors with me: ");
  if (choice === "rock" || choice === "Rock") {
    return "Rock";
  } else if (choice === "paper" || choice === "Paper") {
    return "Paper";
  } else if (choice === "scissors" || choice === "Scissors") {
    return "Scissors";
  } else {
    return "Invalid choice";
}
}