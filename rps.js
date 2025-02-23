function getComputerChoice() {
    let outcome = Math.random();
    if (outcome < 0.33) {
        return "Rock";
    }   else if (0.33 <= outcome < .66) {
        return "Paper";
    }   else if (outcome > 0.66) {
        return "Scissors";
    }

}