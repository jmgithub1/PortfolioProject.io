//A classic first JavaScript game! Build a simple Noughts and Crosses game for two human players. 
// 3x3 grid


// grid should be clickable and make box alertable
// then be able add something in the box
// odd click x  even click o
//if number of clicks odd = x, otherwise 0
// images for noughts and crosses
const userClick = document.querySelector(".cell");

userClick.addEventListener("click", () => {
    alert("You've clicked a box");
    return;
});


//players take turns
//first to 3 in a line
// 9 marked with no win = draw(reset game?)
//The user should be able to reset the game and play it again. 
