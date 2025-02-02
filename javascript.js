let humanScore = 0;
let computerScore = 0;
let UserChoice = ""

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".scoreboard");
const textMessage = document.querySelector(".textmessage");

results.textContent = `${humanScore} : ${computerScore}`;



function playRound(UserChoice){
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    const ComputerChoice = choices[random];
    
    switch (UserChoice + ComputerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            textMessage.textContent = `YOU WIN! ${UserChoice} beats ${ComputerChoice}.`;
            humanScore++;
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            textMessage.textContent = `YOU LOSE! ${ComputerChoice} beats ${UserChoice}.`;
            computerScore++;
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            textMessage.textContent = "ITS A DRAW!";
            break;
    }
    results.textContent = `${humanScore} : ${computerScore}`;
}

rock.addEventListener('click',() => {
    UserChoice = "rock";
    playRound(UserChoice);
})

scissors.addEventListener('click',() => {
    UserChoice = "scissors";
    playRound(UserChoice);
})

paper.addEventListener('click',() => {
    UserChoice = "paper";
    playRound(UserChoice);
})

