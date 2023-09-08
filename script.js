function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
}

function getResult(user, computer) {
    if (user === computer) return "It's a draw! 🤔";
    if ((user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")) {
        return "You win! 🔥";
        
    }
    return "Opponent wins! 😢";
}

function displayResult(user, computer, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `You choose ${user}.<br>Opponent choose ${computer}.<br>${result}`;
}
