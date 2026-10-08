let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("result");

const yourChoice = document.createElement("div");
yourChoice.classList.add("yourChoice");
div.appendChild(yourChoice);

const compChoice = document.createElement("div");
compChoice.classList.add("compChoice");
div.appendChild(compChoice);

const roundResult = document.createElement("div");
roundResult.classList.add("roundResult");
div.appendChild(roundResult);

const yourScore = document.createElement("div");
yourScore.classList.add("yourScore");
div.appendChild(yourScore);

const compScore = document.createElement("div");
compScore.classList.add("compScore");
div.appendChild(compScore);

const gameStatus = document.createElement("div");
gameStatus.classList.add("gameStatus");
div.appendChild(gameStatus);


body.appendChild(div);

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    switch(choice){
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    };

}

const buttons  = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        if(roundsPlayed < 5) {
            let humanChoice = e.target.id;
            let computerChoice = getComputerChoice();

            yourChoice.textContent = `Your Choice: ${humanChoice}`;
            compChoice.textContent = `Computer's Choice: ${computerChoice}`;
            playRound(humanChoice, computerChoice);
            roundsPlayed++;
            yourScore.textContent = `You: ${humanScore}`;
            compScore.textContent = `Computer: ${computerScore}`;

            if(roundsPlayed === 5) {
                declareWinner();
            }
        } 
    });
});

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice) {
        roundResult.textContent = `DRAW`;
    } else if(humanChoice === "paper" & computerChoice === "rock" ||
        humanChoice === "rock" & computerChoice === "scissors" ||
        humanChoice === "scissors" & computerChoice === "paper"
    ){
        roundResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++
    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++
    }
}

function declareWinner() {
    if (humanScore > computerScore) {
        gameStatus.textContent = "🎉 You Won the Game!";
    } else if (humanScore < computerScore) {
        gameStatus.textContent = "💻 Computer Won the Game.";
    } else {
        gameStatus.textContent = "🤝 The entire game is a Draw!";
    }
}
