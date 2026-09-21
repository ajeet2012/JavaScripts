/*

- Tic Tac Toe - W inning pattern

[1, 2, 3]  → Top row
[4, 5, 6]  → Middle row
[7, 8, 9]  → Bottom row

[1, 4, 7]  → Left column
[2, 5, 8]  → Middle column
[3, 6, 9]  → Right column

[1, 5, 9]  → Diagonal
[3, 5, 7]  → Diagonal

*/

let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#newButton");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");

let turnO = true;  // playerX, playerO

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// Add event on each box

boxes.forEach((box)=>{

    box.addEventListener("click", (event) => {

     console.log("box clicked");
    console.log(box.innerText)
     //if (box.innerText)
     if (turnO){
        turnO = false;
        box.innerText = "X";
     }
     else {
        turnO = true;
        box.innerText = "O";
     }
box.disabled = true;
checkWinner();
    });
})
const restGame = () => {
    enableBoxes();
    turnO = true;
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {

    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {

    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {

msg.innerText = `Congratulations. Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner - ", pos1Val);
        showWinner(pos1Val);
    }
 }
}
};

newGameBtn.addEventListener("click", restGame);
restBtn.addEventListener("click", restGame) 