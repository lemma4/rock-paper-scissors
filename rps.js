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
   let choiceLowerCase = choice.toLowerCase();
   if (choiceLowerCase === "rock") {
   return "Rock";
  } else if (choiceLowerCase === "paper") {
    return "Paper";
  } else if (choiceLowerCase === "scissors") {
    return "Scissors";
  } else {
    return "Invalid choice";
}
}