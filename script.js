let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let currentPlayer = "X";




function handleBtnClick(e) {
    e.target.innerText = currentPlayer;
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    e.target.disabled = true;

    checkWinner();
}

 boxes.forEach(box => {
     box.addEventListener("click", handleBtnClick);
 });

function resetGame(){
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
}

const checkWinner = () => {
    for (let condition of winningConditions) {
        let pos1Val = boxes[condition[0]].innerText; 
        let pos2Val = boxes[condition[1]].innerText; 
        let pos3Val = boxes[condition[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                document.getElementById("winner").innerText = `Winner is ${pos1Val}`;
            }
        }
    }
};
    

 resetBtn.addEventListener("click", resetGame);




