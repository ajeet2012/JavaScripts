let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
 let options = ["rock", "paper", "scissors"];
 let randomIndx = Math.floor(Math.random() * 3);
 return options[randomIndx];
}

const playGame = (userChoice) => {

const computerChoice = genComputerChoice();


if (userChoice == computerChoice) {
    drawGame()
}
else {
    let userWin = true;

    if (userChoice === "rock") {
         // scissors or paper
        userWin = (computerChoice === "paper") ? false : true;
    } else if (userChoice == "paper") {
        
        // rock or scissors
        userWin = computerChoice == "scissors" ? false : true;  
    } else if (userChoice == "scissors") {
        
        // rock or paper
        userWin = computerChoice == "rock" ? false : true;  
    }
showWinner(userWin, userChoice, computerChoice);
}

}

const showWinner = (userWin, userChoice, computerChoice) => {

    if (userWin) {
        console.log("User won");
        userScore++;
        msg.innerText = `You win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("Computer win");
        computerScore++;
        msg.innerText = `Computer win! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

    computerScorePara.innerText = `${computerScore}`;
    userScorePara.innerText = `${userScore}`;

}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

choices.forEach((choice)=>{
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })  
})