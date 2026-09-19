console.log("Create a game where you start with any game number. Ask the user to keep guessing the game number until the user enters the correct value.");

let gameNumber =  25;

let userNum = prompt("Enter number");

 while(userNum != gameNumber){
     userNum = prompt("You enter wrong number. Guess again "); 
 }

 console.log("Congratulations. You enter correct number");