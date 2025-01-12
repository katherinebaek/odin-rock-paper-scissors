let humanScore = 0;
let computerScore = 0;


function playGame(){
    for (let i = 0; i < 5; i++){
        function getHumanChoice(){
            let HumanChoice = prompt("What will you play?","Eg. rock, paper, scissors");
            let UserChoice = HumanChoice.toLowerCase()
            return UserChoice;
        }
        const UserChoice = getHumanChoice();
        console.log(UserChoice)
        
        function getComputerChoice(){
            const choices = ['rock', 'paper', 'scissors'];
            let random = Math.floor(Math.random()*3);
            let ComputerChoice = choices[random];
            return ComputerChoice;
        }
        const ComputerChoice = getComputerChoice();
        console.log(ComputerChoice)
        
        function playRound(UserChoice, ComputerChoice){
            switch (UserChoice + ComputerChoice){
                case "rockscissors":
                case "paperrock":
                case "scissorspaper":
                    console.log(`YOU WIN! ${UserChoice} beats ${ComputerChoice}.`)
                    humanScore = humanScore++
                    break;
                case "rockpaper":
                case "paperscissors":
                case "scissorsrock":
                    console.log(`YOU LOSE! ${ComputerChoice} beats ${UserChoice}.`)
                    computerScore = computerScore++
                    break;
                case "rockrock":
                case "paperpaper":
                case "scissorsscissors":
                    console.log("ITS A DRAW!")
            }
        }
        playRound(UserChoice,ComputerChoice)
    }
}

playGame()




