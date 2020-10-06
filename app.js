let xMoves = [];
let oMoves = [];
const gameCells = document.querySelectorAll(".cell");
let   numberClick = 0;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

for (let i = 0; i < gameCells.length; i++) {
    gameCells[i].addEventListener("click",  (event) => {
        if (numberClick % 2 == 0){
            event.target.innerHTML = "X";
            xMoves.push(i);
        } else {
            event.target.innerHTML = "O";
            oMoves.push(i);
        }
        numberClick ++
        checkWin(winningCombos, xMoves)
        checkWin(winningCombos, oMoves)
    });   
}   

function checkWin(winningCombos, movesArray){
  for (let i = 0; i < winningCombos.length; i++) {
    let count = 0
    for (let j = 0; j < winningCombos[i].length; j++) { 
      if (movesArray.includes(winningCombos[i][j])){
        count++
        if(count === 3){
        alert("You Win!");
        return true;  
      }      
      }
    }
  }
  return false;
}


