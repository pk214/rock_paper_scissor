let a=0;
let c=0;
function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
}

function getResult(user, computer) {
    if (user === computer) return ("It's a draw! 🤔 Score: "+n);
    if ((user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")) {
        a=a+1;
        c=c-1;
       return "You Win! 🔥";
        
    }
    a = a - 1;
  c = c + 1;
  return "Opponent Win! 😢";
}

function displayResult(user, computer, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `You choose ${user}.<br>Opponent choose ${computer}.<br>${result}<br>Your Score: ${a}<br>Opponent Score: ${c}`;
}
