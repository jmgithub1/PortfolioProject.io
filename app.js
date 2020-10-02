//A classic first JavaScript game! Build a simple Noughts and Crosses game for two human players. 
// 3x3 grid

// DO NOT FORGET GAME CELLS!!! //

// grid should be clickable and make box alertable
// then be able add something in the box
// odd click x  even click o
//if number of clicks odd = x, otherwise 0
//players take turns
//first to 3 in a line
// 9 marked with no win = draw(reset game?)
//players take turns
//first to 3 in a line
// 9 marked with no win = draw(reset game?)

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
        console.log(xMoves);
        console.log(oMoves);
        for (let i = 0; i < winningCombos.length; i++) {
            let count = 0
            for (let j = 0; j < winningCombos[i].length; j++) { 
              if (xMoves.includes(winningCombos[i][j])){
                count++
                if(count === 3){
                alert("win")
                }
              }
            }
          }
    });   
}   

