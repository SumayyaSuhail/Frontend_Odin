let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    console.log(choice)
    switch(choice){
        case 0: return "Rock"
        case 1: return "Paper"
        case 2: return "Scissors"
    }
    
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?")
    console.log(choice)
    switch(choice){
        case "Rock": return "Rock"
        case "Paper": return "Paper"
        case "Scissors": return "Scissors"
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice) {
        console.log("Draw")
    } else if(humanChoice === "Paper" & computerChoice === "Rock"){
        console.log("You won! Paper beats Rock") 
        humanScore++
    } else if(humanChoice === "Rock" & computerChoice === "Scissors"){
       console.log("You won! Rock beats Scissors")
       humanScore++
    } else if (humanChoice === "Scissors" & computerChoice === "Paper") {
        console.log("You won! Scissors beats Paper")
        humanScore++
    } else if (humanChoice === "Rock" & computerChoice === "Paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++
    } else if (humanChoice === "Scissors" & computerChoice === "Rock"){
        console.log("You lose! Rock beats Scissors")
        computerScore++
    } else if(humanChoice === "Paper" & computerChoice === "Scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore++
    }

}

// const humanChoice = getHumanChoice()
// const computerChoice = getComputerChoice()

function playGame(){
    let i = 0 
    while(i < 5) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        i = i+1
    }
    console.log(humanScore)
    console.log(computerScore)
    if(humanScore>computerScore){
        console.log("You Won!")
    } else if(humanScore < computerScore) {
        console.log("Computer Won")
    } else {
        console.log("Draw")
    }
} 

playGame()